import { useDispatch } from "react-redux";
import { ITEM_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch()
  //console.log(items);
  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border rounded-lg p-4 shadow-md flex items-start"
        >
          <div className="flex-grow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">{item.card.info.name}</h2>
              <span className="text-lg font-semibold">₹{item.card.info.price / 100}</span>
            </div>
            <div className="flex items-center text-green-500 mb-2">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.691h4.177c.969 0 1.371 1.24.588 1.81l-3.388 2.464a1 1 0 00-.364 1.118l1.286 3.964c.3.921-.755 1.688-1.538 1.118l-3.388-2.464a1 1 0 00-1.176 0l-3.388 2.464c-.783.57-1.838-.197-1.538-1.118l1.286-3.964a1 1 0 00-.364-1.118L2.396 9.392c-.783-.57-.38-1.81.588-1.81h4.177a1 1 0 00.95-.691l1.286-3.964z" />
              </svg>
              <span className="text-sm font-semibold">{item.card.info.ratings.aggregatedRating.rating}</span>
              <span className="text-sm font-semibold text-gray-500">({item.card.info.ratings.aggregatedRating.ratingCountV2})</span>
            </div>
            <p className="text-sm text-gray-600">{item.card.info.description}</p>
          </div>
          <div className="ml-4 flex-shrink-0 relative">
            <img
              src={ ITEM_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-40 h-32 object-cover rounded-lg"
            />
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-50 text-green-500 font-bold px-8 py-2 rounded-lg shadow-lg" onClick={() => handleAddItem(item)}>ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
