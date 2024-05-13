import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllFoodItem from "../Pages/AllFoodItem/AllFoodItem";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SingleFood from "../Pages/SingleFood/SingleFood";
import MyAddedFood from "../Pages/MyAddedFood/MyAddedFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-food",
        element: <AllFoodItem></AllFoodItem>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/single-food",
        element: <SingleFood></SingleFood>,
      },
      {
        path: "/my-added-food",
        element: <MyAddedFood></MyAddedFood>,
      },
    ],
  },
]);
export default router;
