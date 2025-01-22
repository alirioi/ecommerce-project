import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex' : 'hidden'
      } top-[68px] w-[360px] h-[calc(100vh-68px)] flex-col fixed bg-white right-0 border shadow-md rounded-lg overflow-y-scroll`}
    >
      <div className="p-6">
        <XMarkIcon
          className="text-black/70 size-6 cursor-pointer hover:text-black"
          onClick={() => context.closeProductDetail()}
        />
      </div>

      <figure>
        <img
          className="w-full max-h-80 object-contain rounded-lg mb-6 px-6"
          src={context.productToShow.image}
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${context.productToShow.price}
        </span>
        <span className="font-medium text-md mb-2">
          {context.productToShow.title}
        </span>
        <span className="font-light text-md">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
