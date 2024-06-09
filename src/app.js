import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import AboutUs from "./components/AboutUs";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const AppLayout = () => {
  return(
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  )
}

const AboutUs = lazy(()=> import ("./components/AboutUs"));

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    children:[
      {
        path:'/',
        element: <Body/>
      },
      {
        path:'/aboutUs',
        element: <Suspense fallback={<Shimmer/>}><AboutUs/></Suspense>
      },
      {
        path:'/restaurantMenu/:resId',
        element: <RestaurantMenu/>
      },
      {
        path:'/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter}/>);
