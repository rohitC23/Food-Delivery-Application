const Shimmer = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-full mb-2"></div>
          <div className="h-10 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array(12).fill(0).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <div className="bg-gray-300 h-48 w-full"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="flex items-center my-2">
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4 ml-2"></div>
                </div>
                <div className="h-4 bg-gray-300 rounded w-2/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
