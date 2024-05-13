import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
  const { image, name, category, price, purchase_count } = food;
  return (
    <div className="rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-900">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-t-lg h-72 dark:bg-gray-500"
      />
      <div className="p-5 bg-violet-100">
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
            {category}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
        </div>
        <div className="flex items-center justify-between">
          <p>Price: {price}</p>
          <p>count: {purchase_count}</p>
          <Link to="/single-food">
            <button className="btn  btn-primary btn-sm">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
