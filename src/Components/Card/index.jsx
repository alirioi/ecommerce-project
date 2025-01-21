import { useContext } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';

const Card = (data) => {
  const context = useContext(ShoppingCartContext);
  const { title, price, category, image } = data.data;

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-64 rounded-lg mb-6 shadow-xl"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5 px-2">
        <span className="first-letter:uppercase absolute bottom-0 left-0 bg-black/60 rounded-lg text-white text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img
          className="w-full h-full object-contain rounded-lg"
          src={image}
          alt={title}
        />
        <PlusCircleIcon
          className="absolute top-0 right-0 flex justify-center items-center bg-white size-6 text-gray-600 hover:text-black rounded-full m-1"
          onClick={(e) => {
            e.stopPropagation();
            context.setCount(context.count + 1);
          }}
        />
      </figure>
      <p className="flex justify-between items-center gap-3 px-2.5">
        <span className="text-xs font-light line-clamp-2">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};

export default Card;
