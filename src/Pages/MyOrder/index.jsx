import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4 p-6">
        <Link to={'/my-orders'} className="absolute left-0">
          <ChevronLeftIcon className="size-6 text-black/70 cursor-pointer hover:text-black" />
        </Link>
        <h1 className="text-xl font-bold">My Order</h1>
      </div>
      <div className="w-80">
        {order?.slice(-1)[0].products.map((product) => (
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
