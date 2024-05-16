import { useEffect, useState } from "react";
import bgImage from "../../assets/bg-img-1.jpg";
import FoodCard from "../Shared/FoodCard/FoodCard";
import axios from "axios";
import { Helmet } from "react-helmet";

const AllFoodItem = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/foods?search=${search}`
      );
      setFoods(data);
    };
    getData();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };
  console.log(search);
  // console.log(foods);
  return (
    <div className="mt-24 lg:mt-32  container mx-auto px-2 md:px-4 lg:px-0">
      <Helmet>
        <title>FoodVilla | All Foods</title>
      </Helmet>
      <div
        className="h-[250px] md:h-[400px] lg:h-[calc(100vh-200px)] rounded-lg"
        style={{
          background: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full flex justify-center items-center bg-gradient-to-t from-[#1b1820e5]  to-[#150B2B22] rounded-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            All Foods Here
          </h2>
        </div>
      </div>
      <div className="my-8 md:my-10 lg:my-14 container mx-auto  flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5 md:mb-8 lg:mb-14">
          All Food Items
        </h2>
        <form onSubmit={handleSearch}>
          <label className="input input-bordered flex items-center gap-2 mb-10 max-w-96">
            <input
              name="search"
              type="text"
              className="grow"
              placeholder="Search"
            />
            <button className="btn btn-sm btn-primary"> search</button>
          </label>
        </form>

        {foods.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {foods.map((food) => (
              <FoodCard key={food._id} food={food}></FoodCard>
            ))}
          </div>
        ) : (
          <span className="loading loading-dots loading-lg mt-20"></span>
        )}
      </div>
    </div>
  );
};

export default AllFoodItem;
