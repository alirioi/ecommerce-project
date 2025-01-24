import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
  const { productToShow, isProductDetailOpen, closeProductDetail } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? 'flex' : 'hidden'
      } top-[68px] w-[360px] h-[calc(100vh-68px)] flex-col fixed bg-white right-0 border shadow-md rounded-lg overflow-y-scroll`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Details</h2>
        <div>
          <XMarkIcon
            className="text-black/70 size-6 cursor-pointer hover:text-black"
            onClick={() => closeProductDetail()}
          />
        </div>
      </div>

      <figure>
        <img
          className="w-full max-h-80 object-contain rounded-lg my-6 px-6"
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${productToShow.price}
        </span>
        <span className="font-medium text-md mb-2">{productToShow.title}</span>
        <span className="font-light text-md">{productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
