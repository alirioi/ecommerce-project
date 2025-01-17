import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = (data) => {
  const context = useContext(ShoppingCartContext);
  const { title, price, category, image } = data.data;

  return (
    <div className="bg-white cursor-pointer w-56 h-64 rounded-lg mb-6 shadow-xl">
      <figure className="relative mb-2 w-full h-4/5 px-2">
        <span className="first-letter:uppercase absolute bottom-0 left-0 bg-black/60 rounded-lg text-white text-xs m-2 px-3 py-0.5">
          {category}
        </span>
        <img
          className="w-full h-full object-contain rounded-lg"
          src={image}
          alt={title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-slate-300 w-6 h-6 rounded-full m-2"
          onClick={() => context.setCount(context.count + 1)}
        >
          +
        </div>
      </figure>
      <p className="flex justify-between items-center gap-3 px-2.5">
        <span className="text-xs font-light line-clamp-2">{title}</span>
        <span className="text-lg font-medium">${price}</span>
      </p>
    </div>
  );
};

export default Card;
