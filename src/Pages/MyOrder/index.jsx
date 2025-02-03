import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const { id } = useParams();
  const adjustedId = id ?? 'last';
  const orderItem =
    adjustedId === 'last'
      ? order?.at(-1)
      : order?.find((item) => item.id === adjustedId);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-6">
        <Link to={'/my-orders'} className="absolute left-0">
          <ChevronLeftIcon className="size-6 text-black/70 cursor-pointer hover:text-black" />
        </Link>
        <h1 className="text-2xl font-bold">My Order Details</h1>
      </div>
      <div className="flex flex-col w-80 mb-6 border-b border-black/40 p-6">
        <p className="flex justify-between items-center text-md">
          <span className="font-medium">Date:</span>
          <span className="font-light">{orderItem?.date}</span>
        </p>
        <p className="flex justify-between items-center text-md">
          <span className="font-medium">Order ID:</span>
          <span className="font-light">{orderItem?.id}</span>
        </p>
        <p className="flex justify-between items-center text-md">
          <span className="font-medium">Total Products:</span>
          <span className="font-light">{orderItem?.totalProducts}</span>
        </p>
        <p className="flex justify-between items-center text-md">
          <span className="font-medium">Total Price:</span>
          <span className="font-light">${orderItem?.totalPrice}</span>
        </p>
      </div>
      <div className="w-80">
        {orderItem?.products?.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            myOrderStyle={'mb-6'}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
