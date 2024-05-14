import PropTypes from "prop-types";

const MyFoodCard = ({ food }) => {
  const { image, name, category, price, purchase_count, quantity } = food;

  return (
    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
      <td className="p-1">
        <img className="h-16 w-20 rounded-md" src={image} alt="" />
      </td>
      <td className="p-3">
        <p>{name}</p>
      </td>
      <td className="p-3">
        <p>{category}</p>
      </td>
      <td className="p-3">
        <p>{quantity}</p>
      </td>
      <td className="p-3">{purchase_count}</td>
      <td className="p-3 text-right">
        <p>$ {price}</p>
      </td>
      <td className="p-3 text-right">
        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
          <span>Update</span>
        </span>
      </td>
    </tr>
  );
};

MyFoodCard.propTypes = {
  food: PropTypes.object,
};
export default MyFoodCard;
