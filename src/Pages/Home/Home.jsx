import { useEffect, useState } from "react";
import Banner from "./Banner";
import FoodCard from "../Shared/FoodCard/FoodCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("Food.json")
      .then((res) => res.json())
      .then((data) => {
        const slicesData = data.slice(0, 6);
        setFoods(slicesData);
      });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="my-14 container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14">Top Food Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
        <Link to="/all-food">
          <button className="btn btn-success mt-14">See All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
