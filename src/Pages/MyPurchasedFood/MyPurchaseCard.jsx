const MyPurchaseCard = ({ food }) => {
  const { image, name, price, made_by, date, category } = food;

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
        <p>{made_by}</p>
      </td>
      <td className="p-3">{date}</td>
      <td className="p-3 text-right">
        <p>${price}</p>
      </td>
      <td className="p-3 text-right">
        <span className="px-3 py-1 font-semibold rounded-md dark:bg-error dark:text-gray-50">
          <span>Delete</span>
        </span>
      </td>
    </tr>
  );
};

export default MyPurchaseCard;
