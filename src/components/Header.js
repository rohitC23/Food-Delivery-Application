import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { FiSearch, FiPercent, FiHelpCircle, FiUser, FiShoppingCart, FiBriefcase } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
  return (
    <div className="flex items-center justify-between px-12 py-4 bg-white text-black shadow-md">
      <img src={LOGO_URL} className="w-20 h-auto" alt="Logo" />
      <div className="nav-items flex items-center space-x-6 px-12">
        <ul className="flex items-center space-x-6">
          <li className="flex items-center hover:text-gray-400">
            <FiBriefcase className="mr-2" />
            <Link to={"/"}>Swiggy Corporate</Link>
          </li>
          <li className="flex items-center hover:text-gray-400">
            <FiSearch className="mr-2" />
            <Link to={"/search"}>Search</Link>
          </li>
          <li className="flex items-center hover:text-gray-400">
            <FiPercent className="mr-2" />
            <Link to={"/offers"}>Offers</Link>
          </li>
          <li className="flex items-center hover:text-gray-400">
            <FiHelpCircle className="mr-2" />
            <Link to={"/help"}>Help</Link>
          </li>
          <li className="flex items-center hover:text-gray-400">
            <FiUser className="mr-2" />
            <Link to={"/profile"}>Sign In</Link>
          </li>
          <li className="flex items-center hover:text-gray-400">
            <FiShoppingCart className="mr-2" />
            <Link to={"/cart"}>Cart ({cartItems.length})</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
