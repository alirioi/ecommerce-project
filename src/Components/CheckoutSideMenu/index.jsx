import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    closeCheckoutSideMenu,
    cartProducts,
    setCartProduct,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProduct(filteredProducts);
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

      <div className="p-6">
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
    </aside>
  );
};

export default CheckoutSideMenu;
