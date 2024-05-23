import { useEffect, useState } from "react";
import MyPurchaseCard from "./MyPurchaseCard";
import { Helmet } from "react-helmet";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyPurchasedFood = () => {
  const { user } = useAuth();
  const [myPurchase, setMyPurchase] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure(
        `/myPurchasedFood?email=${user?.email}`,
        { withCredentials: true }
      );
      setMyPurchase(data);
    };
    getData();
  }, [user, axiosSecure]);
  return (
    <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800 mt-20 min-h-[calc(100vh-355px)]">
      <Helmet>
        <title>FoodVilla | My Purchased Foods</title>
      </Helmet>
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
              <th className="p-3">Made By</th>
              <th className="p-3">Purchase Date</th>
              <th className="p-3 text-right">Price</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {myPurchase.map((food) => (
              <MyPurchaseCard
                key={food._id}
                food={food}
                myPurchase={myPurchase}
                setMyPurchase={setMyPurchase}
              ></MyPurchaseCard>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPurchasedFood;
