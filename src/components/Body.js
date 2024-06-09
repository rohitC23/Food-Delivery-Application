import { useEffect, useState } from "react";
import RestaurantCard, { withDiscountLabel }from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");

  const RestaurantDiscountedCard = withDiscountLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.67740&lng=83.20360&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    //console.log(json);
    // optional chaining
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchRestaurant(value);
    const searchedList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(value)
    );
    setFilteredRestaurants(searchedList);
  };

  const handleTopRatedClick = () => {
    const topRatedList = listOfRestaurants.filter(res => res.info.avgRating >= 4.2);
    setFilteredRestaurants(topRatedList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body p-4 px-16">
      <div className="flex flex-col sm:flex-row gap-4 mb-4 px-8">
        <input
          type="text"
          id="search-box"
          className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Find your favourite dish"
          value={searchRestaurant}
          onChange={handleSearchChange}
        />
        <button
          className="p-2 rounded-md bg-orange-500 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          onClick={handleTopRatedClick}
        >
          Top Rated
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-12">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"restaurantMenu/" + restaurant.info.id}>
            {restaurant.info.aggregatedDiscountInfoV2 ? <RestaurantCard resData={restaurant}/> : 
            <RestaurantDiscountedCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
