import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <Layout>
      <p className="text-center text-xl font-bold mb-6">My Order</p>
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
