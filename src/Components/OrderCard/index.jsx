import { TrashIcon } from '@heroicons/react/24/solid';

const OrderCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { id, title, image, price, handleDelete } = props;

  return (
    <div className="flex justify-between items-center px-4 py-2 mb-2 hover:shadow-lg">
      <div className="flex items-center gap-4 max-w-44">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full object-contain"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light line-clamp-2">{title}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-medium">${price}</p>
        <TrashIcon
          className="text-black/70 size-4 cursor-pointer hover:text-black"
          onClick={() => handleDelete(id)}
        />
      </div>
    </div>
  );
};

export default OrderCard;
