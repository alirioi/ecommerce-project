import './style.css';

const LoadingSkeleton = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <div
          key={item}
          className="animate-loading bg-gray-300 w-56 h-64 rounded-lg mb-6 shadow-lg"
        ></div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;
