import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const {resId} = useParams();
  
  const resInfo = useRestaurantMenu(resId);
  
  if(resInfo.length === 0) return <Shimmer/>;

  // const itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];

  //console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(resInfo?.data?.cards[2]?.card?.card?.info);

  return (
    <div className="p-4">
      <h1 className="text-2xl text-center font-bold">{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex items-center text-green-500 mb-4">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.691h4.177c.969 0 1.371 1.24.588 1.81l-3.388 2.464a1 1 0 00-.364 1.118l1.286 3.964c.3.921-.755 1.688-1.538 1.118l-3.388-2.464a1 1 0 00-1.176 0l-3.388 2.464c-.783.57-1.838-.197-1.538-1.118l1.286-3.964a1 1 0 00-.364-1.118L2.396 9.392c-.783-.57-.38-1.81.588-1.81h4.177a1 1 0 00.95-.691l1.286-3.964z" />
          </svg>
          <span className="ml-2 text-green-500 text-sm font-bold">
            {resInfo?.data?.cards[2]?.card?.card?.info?.avgRating}
          </span>
          <span className="ml-2 text-gray-800 text-sm font-bold">
            ({resInfo?.data?.cards[2]?.card?.card?.info?.totalRatingsString})
          </span>
          <span className="ml-4 text-gray-800 text-sm font-bold">
            {resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
          </span>
        </div>
        <div className="text-gray-600 mb-2">
          <span className="font-semibold">{resInfo?.data?.cards[2]?.card?.card?.info?.areaName}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <span>{resInfo?.data?.cards[2]?.card?.card?.info?.sla?.deliveryTime} mins</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm">
          <span>0.8 kms | ₹22 Delivery fee will apply</span>
        </div>
      </div>
      {categories.map((category) => (
        <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />
      ))}
    </div>
  );
}

export default RestaurantMenu;