import { useEffect, useState } from "react";
import Banner from "./Banner";
import FoodCard from "../Shared/FoodCard/FoodCard";
import { Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

const Home = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/top-foods`);
      setFoods(data);
    };
    getData();
  }, []);
  return (
    <div className="px-2 md:px-4">
      <Helmet>
        <title>FoodVilla | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="my-10 lg:my-14 container mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-8 lg:mb-14">
          Top Food Items
        </h2>

        {foods.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {foods.slice(0, 8).map((food) => (
              <FoodCard key={food._id} food={food}></FoodCard>
            ))}
          </div>
        ) : (
          <span className="loading loading-dots loading-lg mt-20"></span>
        )}
        <Link to="/all-food">
          <button className="btn btn-sm btn-success mt-7 md:mt-10 lg:mt-14">
            See All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
