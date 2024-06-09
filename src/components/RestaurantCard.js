import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <img 
        src={IMG_URL + resData.info.cloudinaryImageId} 
        alt="Restaurant" 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold truncate" title={resData.info.name}>{resData.info.name}</h3>
        <div className="flex items-center my-2">
          <span className="text-green-600 font-semibold">{'❇️'}{resData.info.avgRating}</span>
          <span className="text-gray-600 ml-2">• {resData.info.sla.slaString}</span>
        </div>
        <h4 className="text-gray-600 truncate" title={resData.info.cuisines.join(', ')}>{resData.info.cuisines.join(', ')}</h4>
        <p className="text-gray-600 mt-2 truncate" title={resData.info.areaName}>{resData.info.areaName}</p>
      </div>
    </div>
  );
}

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    const { resData } = props;

    return (
      <div className="relative">
        {resData.info.aggregatedDiscountInfoV3 && (
          <label className="absolute top-0 left-0 bg-orange-600 text-white p-2">
            <h3 className="text-lg font-bold">{resData.info.aggregatedDiscountInfoV3.header}</h3>
            <h4 className="text-sm">{resData.info.aggregatedDiscountInfoV3.subHeader}</h4>
          </label>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  }
}

export default RestaurantCard;
