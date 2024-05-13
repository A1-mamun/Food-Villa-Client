import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import MyFoodCard from "./MyFoodCard";

const MyAddedFood = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/myFood/${user?.email}`
      );
      setMyFoods(data);
    };
    getData();
  }, [user]);
  console.log(myFoods);
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 mt-20 min-h-[calc(100vh-355px)]">
      <h2 className="mb-4 text-2xl font-semibold leading-tight">
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
              <th className="p-3">Photo</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Purchased</th>
              <th className="p-3 text-right">Price</th>
              <th className="p-3"></th>
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
