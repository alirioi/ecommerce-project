import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';
import LoadingSkeleton from '../../Components/LoadingSkeleton';

function Home() {
  const { setSearchByTitle, filteredItems, setSearchByCategory, isLoading } =
    useContext(ShoppingCartContext);

  useEffect(() => {
    return () => {
      setSearchByTitle('');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { category } = useParams();

  useEffect(() => {
    if (category?.length > 0) {
      setSearchByCategory(category.toLowerCase());
    } else if (category?.length === 0) {
      setSearchByCategory('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const renderView = () => {
    if (filteredItems?.length > 0) {
      return filteredItems.map((item) => <Card key={item.id} data={item} />);
    } else {
      return (
        <span className="text-center text-lg font-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          No products found
        </span>
      );
    }
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mt-5">Exclusive Products</h1>
      <div className="w-72 md:w-80 lg:w-96 relative flex items-center justify-between mt-5 mb-20">
        <MagnifyingGlassIcon className="absolute left-2 size-6 text-black/40" />
        <input
          type="text"
          placeholder="Search a product..."
          className="w-full bg-white border border-black/40 rounded-lg py-2 pl-10 text-black/70 outline-none"
          onChange={(event) => {
            setSearchByTitle(event.target.value);
          }}
        />
      </div>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {renderView()}
        </div>
      )}
      <ProductDetail />
    </Layout>
  );
}

export default Home;
