import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } =
    useContext(ShoppingCartContext);
  console.log(cartProducts);

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
        {cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
