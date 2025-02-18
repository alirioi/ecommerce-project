import { createContext, useState, useEffect } from 'react';
import { apiUrl } from '../Api';
import { Storage } from '../Utils/Storage';

// eslint-disable-next-line
export const ShoppingCartContext = createContext();

// eslint-disable-next-line
export const initializeLocalStorage = () => {
  const accountInLocalStorage = Storage.getItem('account');
  const signOutInLocalStorage = Storage.getItem('sign-out');
  let parsedAccount;
  let parsedSignOut;

  if (!accountInLocalStorage) {
    Storage.setItem('account', {});
    parsedAccount = {};
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage);
  }

  if (!signOutInLocalStorage) {
    Storage.setItem('sign-out', false);
    parsedSignOut = false;
  } else {
    parsedSignOut = JSON.parse(signOutInLocalStorage);
  }
};

// eslint-disable-next-line react/prop-types
export const ShoppingCartProvider = ({ children }) => {
  // My Account
  const [account, setAccount] = useState({});

  // Sign Out
  const [signOut, setSignOut] = useState(false);

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  // Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

  // Loading Skeleton
  const [isLoading, setIsLoading] = useState(true);

  // Get Products
  const [items, setItems] = useState(null);

  // API - Get Products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        const data = await response.json();
        setItems(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error(`Ha ocurrido un error al obtener los datos: ${error}`);
      }
    };
    fetchData();
  }, []);

  // Menu - Open/Close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});

  // Shopping Cart - Add products to cart
  const [cartProducts, setCartProduct] = useState([]);

  // Shopping Cart - Order
  const [order, setOrder] = useState([]);

  // Get Products - Search by title
  const [searchByTitle, setSearchByTitle] = useState('');

  // Get Products - Search by category
  const [searchByCategory, setSearchByCategory] = useState('');

  // Get Filtered Products
  const [filteredItems, setFilteredItems] = useState(null);

  // Función genérica de filtrado
  const filterItems = (items, { key, value }) => {
    if (!items || !value) return items;

    const searchValue = value.toLowerCase();

    return items.filter((item) =>
      item[key]?.toLowerCase().includes(searchValue)
    );
  };

  // Función principal de filtrado combinado
  const filteredBy = (items, title, category) => {
    let result = items;

    if (category) {
      result = filterItems(result, { key: 'category', value: category });
    }

    if (title) {
      result = filterItems(result, { key: 'title', value: title });
    }

    return result;
  };

  useEffect(() => {
    setFilteredItems(filteredBy(items, searchByTitle, searchByCategory));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, searchByTitle, searchByCategory]);

  return (
    <ShoppingCartContext.Provider
      value={{
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProduct,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
        isLoading,
        isMenuOpen,
        setIsMenuOpen,
        account,
        setAccount,
        signOut,
        setSignOut,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
