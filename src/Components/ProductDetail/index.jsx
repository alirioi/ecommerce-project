import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const ProductDetail = () => {
  // const context = useContext(ShoppingCartContext);

  return (
    <aside className="top-[68px] w-[360px] h-[calc(100vh-68px)] flex flex-col fixed bg-white right-0 border shadow-md rounded-lg">
      <div className="flex justify-between items-center p-6">
        <h2 className="text-xl font-medium">Detail</h2>
        <XMarkIcon
          className="text-black/70 size-6 cursor-pointer"
          onClick={() => console.log('close')}
        />
      </div>
    </aside>
  );
};

export default ProductDetail;
