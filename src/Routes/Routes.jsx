import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllFoodItem from "../Pages/AllFoodItem/AllFoodItem";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import SingleFood from "../Pages/SingleFood/SingleFood";
import MyAddedFood from "../Pages/MyAddedFood/MyAddedFood";
import PurchaseFood from "../Pages/PurchaseFood/PurchaseFood";
import PrivateRoute from "./PrivateRoute";
import MyPurchasedFood from "../Pages/MyPurchasedFood/MyPurchasedFood";

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
        path: "/single-food/:id",
        element: (
          <PrivateRoute>
            <SingleFood></SingleFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/single-food/${params.id}`),
      },
      {
        path: "/my-added-food",
        element: (
          <PrivateRoute>
            <MyAddedFood></MyAddedFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/purchase-food/:id",
        element: (
          <PrivateRoute>
            <PurchaseFood></PurchaseFood>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/single-food/${params.id}`),
      },
      {
        path: "/my-purchased-food",
        element: (
          <PrivateRoute>
            <MyPurchasedFood></MyPurchasedFood>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
