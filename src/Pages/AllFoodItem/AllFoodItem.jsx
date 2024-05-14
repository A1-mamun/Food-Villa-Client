import { useEffect, useState } from "react";
import bgImage from "../../assets/bg-img-1.jpg";
import FoodCard from "../Shared/FoodCard/FoodCard";
import axios from "axios";

const AllFoodItem = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/foods`);
      setFoods(data);
    };
    getData();
  }, []);

  // console.log(foods);
  return (
    <div className="mt-32 container mx-auto">
      <div
        className="h-[calc(100vh-200px)] rounded-lg"
        style={{
          background: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full flex justify-center items-center bg-gradient-to-t from-[#1b1820e5]  to-[#150B2B22] rounded-lg">
          <h2 className="text-5xl font-bold">All Foods Here</h2>
        </div>
      </div>
      <div className="my-14 container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14">All Food Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFoodItem;
