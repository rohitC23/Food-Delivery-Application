import ItemsList from "./ItemsList";

const RestaurantCategory = ({data}) => {
  //console.log(data)
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between">
        <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
        <span>🔽</span>
      </div>
      <ItemsList items={data.itemCards}/>
    </div>
  )
}

export default RestaurantCategory;