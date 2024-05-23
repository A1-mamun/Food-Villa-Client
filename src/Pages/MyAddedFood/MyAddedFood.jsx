import { useEffect, useState } from "react";
import axios from "axios";
import MyFoodCard from "./MyFoodCard";
import { Helmet } from "react-helmet";
import UseAuth from "../../Hooks/UseAuth";

const MyAddedFood = () => {
  const { user } = UseAuth();
  const [myFoods, setMyFoods] = useState([]);

  console.log(user);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/myFood?email=${user?.email}`,
        { withCredentials: true }
      );
      setMyFoods(data);
    };
    getData();
  }, [user]);

  // console.log(myFoods);
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 mt-20 min-h-[calc(100vh-355px)]">
      <Helmet>
        <title>FoodVilla | My Added Foods</title>
      </Helmet>
      <h2 className="mb-4 text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
        My Added Food Item
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
            <col />
            <col className="w-24" />
          </colgroup>
          <thead className="dark:bg-gray-300">
            <tr className="text-left">
              <th className="p-3 hidden md:block text-xs md:text-sm lg:text-base">
                Photo
              </th>
              <th className="p-3 text-xs md:text-sm lg:text-base">Name</th>
              <th className="p-3 text-xs md:text-sm lg:text-base">Category</th>
              <th className="p-3 text-xs md:text-sm lg:text-base">Stock</th>
              <th className="p-3 hidden md:table-cell text-xs md:text-sm lg:text-base">
                Sell
              </th>
              <th className="p-3 text-right text-xs md:text-sm lg:text-base">
                Price
              </th>
              <th className="p-3 text-xs md:text-sm lg:text-base"></th>
            </tr>
          </thead>
          <tbody>
            {myFoods.map((food) => (
              <MyFoodCard key={food._id} food={food}></MyFoodCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedFood;
