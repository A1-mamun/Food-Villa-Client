import { useEffect, useState } from "react";
import Banner from "./Banner";
import FoodCard from "../Shared/FoodCard/FoodCard";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Home = () => {
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure("/top-foods");
      setFoods(data);
    };
    getData();
  }, [axiosSecure]);
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
