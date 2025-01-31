import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import { totalPrice } from '../../Utils';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProduct,
    order,
    setOrder,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProduct(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
      id: nanoid(10),
    };

    setOrder([...order, orderToAdd]);
    setCartProduct([]);
    closeCheckoutSideMenu();
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } top-[68px] w-[360px] h-[calc(100vh-68px)] flex-col fixed bg-white right-0 border shadow-md rounded-lg overflow-y-auto`}
    >
      <div className="flex justify-between items-center p-6 pb-0">
        <h2 className="font-medium text-xl">My Order</h2>
        <div>
          <XMarkIcon
            className="text-black/70 size-6 cursor-pointer hover:text-black"
            onClick={() => closeCheckoutSideMenu()}
          />
        </div>
      </div>

      <div className="pt-6 mb-[124px]">
        {cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <p className="text-center text-lg font-light">Your cart is empty</p>
        )}
      </div>

      {cartProducts.length > 0 ? (
        <div className="fixed bottom-0 right-0 w-[360px] p-6 pt-3 bg-white border-t-2">
          <p className="flex justify-between items-center">
            <span className="text-lg font-medium">Total:</span>
            <span className="text-xl font-bold">
              ${totalPrice(cartProducts)}
            </span>
          </p>
          <Link to="/my-orders/last">
            <button
              className="w-full mt-4 bg-black/70 hover:bg-black text-white font-medium px-4 py-2 rounded-lg"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </Link>
        </div>
      ) : null}
    </aside>
  );
};

export default CheckoutSideMenu;
