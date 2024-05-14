import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const PurchaseFood = () => {
  const { user } = useContext(AuthContext);
  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}-${month}-${year}`;
  };

  const [date, setDate] = useState(getDate());

  const food = useLoaderData();
  const { _id, name, image, price, quantity } = food;

  const handlePurchase = (e) => {
    e.preventDefault();
    const food = {
      name,
      price,
      quantity,
      date,
      Buyer_name: user?.displayName,
      Buyer_email: user?.email,
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/purchase`, food, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        const data = res.data;
        if (data?.insertedId) {
          toast.success("You purchased successfully");
          // console.log("successfull");
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-900 mt-24 min-h-[calc(100vh-410px)] container mx-auto mb-10">
      <form
        onSubmit={handlePurchase}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-6 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-2">
            <img className="rounded-md" src={image} alt="" />
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="foodname" className="text-sm">
                Food name
              </label>
              <input
                id="foodname"
                type="text"
                placeholder="Food name"
                defaultValue={name}
                readOnly
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="price" className="text-sm">
                Price
              </label>
              <input
                id="price"
                type="text"
                placeholder="Price"
                defaultValue={`${price} $`}
                readOnly
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Quantity
              </label>
              <input
                id="quantity"
                type="text"
                placeholder="Quantity"
                defaultValue={quantity}
                readOnly
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Buying Date
              </label>
              <input
                id="date"
                type="text"
                placeholder="Buying Date"
                defaultValue={date}
                readOnly
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                Buyer name
              </label>
              <input
                id="buyername"
                type="text"
                placeholder="Buyer name"
                defaultValue={user?.displayName}
                readOnly
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Buyer Email
              </label>
              <input
                id="buyeremail"
                type="text"
                placeholder="Buyer Email"
                defaultValue={user?.email}
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-500 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            <div className="col-span-full">
              <input
                className="btn btn-block btn-primary"
                type="submit"
                value="Purchase"
              />
              <Toaster />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default PurchaseFood;
