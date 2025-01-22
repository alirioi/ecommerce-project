import { useContext } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';

// eslint-disable-next-line react/prop-types
const Card = ({ data }) => {
  const {
    count,
    setCount,
    openProductDetail,
    setProductToShow,
    cartProducts,
    setCartProduct,
  } = useContext(ShoppingCartContext);

  // eslint-disable-next-line react/prop-types
  const { title, price, category, image } = data;

  const showProduct = (productDetail) => {
    openProductDetail();
    setProductToShow(productDetail);
  };

  const addProductToCart = (productData) => {
    setCartProduct([...cartProducts, productData]);
    setCount(count + 1);
    console.log('Cart: ', cartProducts);
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-64 rounded-lg mb-6 shadow-xl"
      onClick={() => showProduct(data)}
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
          className="absolute top-0 right-0 flex justify-center items-center bg-white size-6 text-black/70 hover:text-black rounded-full m-1"
          onClick={(e) => {
            e.stopPropagation();
            addProductToCart(data);
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
