// import { TrashIcon } from '@heroicons/react/24/solid';

const OrdersCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { date, totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center px-4 py-2 mb-2 border border-black hover:shadow-lg">
      <p>
        <span>{date}</span>
        <span>{totalProducts}</span>
        <span>${totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;
