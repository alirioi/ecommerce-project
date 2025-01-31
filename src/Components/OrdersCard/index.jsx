// import { TrashIcon } from '@heroicons/react/24/solid';

const OrdersCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { date, totalPrice, totalProducts, id } = props;

  return (
    <div className="flex flex-col w-72 p-6 mb-4 rounded-lg border border-black/40 hover:border-black hover:shadow-lg">
      <p className="flex justify-between items-center text-md">
        <span className="font-bold">Date: </span>
        <span>{date}</span>
      </p>
      <p className="flex justify-between items-center text-md">
        <span className="font-bold">Order ID: </span>
        <span>{id}</span>
      </p>
      <p className="flex justify-between items-center text-md">
        <span className="font-bold">Total Products: </span>
        <span>{totalProducts}</span>
      </p>
      <p className="flex justify-between items-center text-md">
        <span className="font-bold">Total Price: </span>
        <span>${totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
