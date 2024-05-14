import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit form
  const onSubmit = (data, event) => {
    console.log(data);
    const newData = {
      ...data,
      purchase_count: 0,
      quantity: parseInt(data.quantity),
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/added`, newData, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        const data = res.data;
        if (data?.insertedId) {
          toast.success("You purchased successfully");
          event.target.reset();
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div className="container mx-auto bg-gray-100 rounded-xl px-5 md:px-8 lg:px-20 py-10 mt-28">
      <h2
        className="text-2xl md:text-3xl lg:text-4xl text-center mb-10
      "
      >
        Add Food Item
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row gap-10 w-full my-8">
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
              User Email :
              <input
                name="adder_email"
                type="email"
                className="grow text-gray-400"
                placeholder="Enter user email"
                defaultValue={user?.email}
                readOnly
                {...register("adder_email", { required: true })}
              />
              {errors.adder_email && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
              User Name :
              <input
                name="adder_name"
                type="text"
                className="grow text-gray-400"
                placeholder="Enter user name"
                defaultValue={user?.displayName}
                readOnly
                {...register("adder_name", { required: true })}
              />
              {errors.adder_name && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full my-8">
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
              Food Name :
              <input
                name="name"
                type="text"
                className="grow text-gray-400"
                placeholder="Enter food name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
              Photo URL :
              <input
                name="image"
                type="text"
                className="grow text-gray-400"
                placeholder="Enter photo url"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full my-8">
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
              Category:
              <input
                name="category"
                type="text"
                className="grow text-gray-400"
                placeholder="Enter category "
                {...register("category", { required: true })}
              />
              {errors.category && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
              Origin :
              <input
                name="origin"
                type="text"
                className="grow text-gray-400"
                placeholder="Enter origin name"
                {...register("origin", { required: true })}
              />
              {errors.origin && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 w-full my-8">
          <div className="w-full">
            <div className="form-control w-full mb-8">
              <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
                Made By :
                <input
                  name="made_by"
                  type="text"
                  className="grow text-gray-400"
                  placeholder="Enter origin name"
                  {...register("made_by", { required: true })}
                />
                {errors.made_by && (
                  <span className="text-red-700">This field is required</span>
                )}
              </label>
            </div>
            <div className="flex gap-10">
              <div className="form-control w-full ">
                <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
                  Price :
                  <input
                    name="price"
                    type="number"
                    className="grow text-gray-400"
                    placeholder="Enter"
                    min="0"
                    max="5000"
                    {...register("price", { required: true })}
                  />
                  {errors.price && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </label>
              </div>
              <div className="form-control w-full">
                <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
                  Quantity :
                  <input
                    name="quantity"
                    type="number"
                    className="grow text-gray-400"
                    placeholder="Enter quantity"
                    min="1"
                    max="20"
                    step="1"
                    {...register("quantity", { required: true })}
                  />
                  {errors.quantity && (
                    <span className="text-red-700">This field is required</span>
                  )}
                </label>
              </div>
            </div>
          </div>
          <div className="form-control w-full mb-8">
            <label className="textarea textarea-bordered textarea-ghost flex  gap-2 text-blue-300 text-sm md:text-base">
              Description :
              <textarea
                name="details"
                type="text"
                className="grow h-28 rounded-xl px-2 bg-transparent focus:outline-none text-gray-400"
                placeholder="Enter short description"
                {...register("details", { required: true })}
              />
              {errors.details && (
                <span className="text-red-700">This field is required</span>
              )}
            </label>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-block bg-green-500 text-white text-base md:text-lg"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddFood;
