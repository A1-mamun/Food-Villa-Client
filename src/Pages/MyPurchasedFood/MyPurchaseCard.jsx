import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyPurchaseCard = ({ food, myPurchase, setMyPurchase }) => {
  const { _id, image, name, price, made_by, date, category } = food;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/delete/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data?.deletedCount) {
              toast.success("Item deleted successfully");
              const remaining = myPurchase.filter(
                (purchase) => purchase._id !== id
              );
              setMyPurchase(remaining);
            }
          })
          .catch((err) => toast.error(err?.message));
      }
    });
  };
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
        <span
          onClick={() => handleDelete(_id)}
          className="btn btn-error btn-sm"
        >
          <span className="">Delete</span>
        </span>
      </td>
    </tr>
  );
};

export default MyPurchaseCard;
