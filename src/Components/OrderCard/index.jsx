import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, image, price } = props;

  return (
    <div className="flex justify-between items-center rounded-lg px-4 py-2 mb-2 hover:shadow-lg">
      <div className="flex items-center gap-4 max-w-44">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-contain"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light line-clamp-2">{title}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <XMarkIcon
          className="text-black/70 size-4 cursor-pointer hover:text-black"
          onClick={() => console.log('delete')}
        />
      </div>
    </div>
  );
};

export default OrderCard;
