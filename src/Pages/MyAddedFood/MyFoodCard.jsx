import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Modal from "react-modal";

const MyFoodCard = ({ food }) => {
  const {
    _id,
    image,
    name,
    category,
    price,
    purchase_count,
    quantity,
    adder_email,
    adder_name,
    made_by,
    details,
    origin,
  } = food;

  const [modalIsOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, event) => {
    // console.log(data);
    const newData = {
      ...data,
      quantity: parseInt(data.quantity),
    };
    axios
      .put(`${import.meta.env.VITE_API_URL}/update/${_id}`, newData, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        if (data?.modifiedCount) {
          toast.success("Food updated successfully");
          closeModal();
          event.target.reset();
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
        <p>{quantity}</p>
      </td>
      <td className="p-3">{purchase_count}</td>
      <td className="p-3 text-right">
        <p>$ {price}</p>
      </td>
      <td className="p-3 text-right">
        <span onClick={openModal} className="btn btn-sm btn-primary">
          <span>Update</span>
        </span>
      </td>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        // className=" top-1/2 left-1/2 bottom-auto right-auto mr-[-50%] transition -translate-x-1/2 -translate-y-1/2"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-400 rounded-xl"
      >
        <div className="w-[1200px] bg-gray-100 rounded-xl px-3 md:px-6 lg:px-10 py-10">
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
                    defaultValue={adder_email}
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
                    defaultValue={adder_name}
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
                    defaultValue={name}
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
                    defaultValue={image}
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
                    defaultValue={category}
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
                    defaultValue={origin}
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
                      defaultValue={made_by}
                      {...register("made_by", { required: true })}
                    />
                    {errors.made_by && (
                      <span className="text-red-700">
                        This field is required
                      </span>
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
                        defaultValue={price}
                        min="0"
                        max="5000"
                        {...register("price", { required: true })}
                      />
                      {errors.price && (
                        <span className="text-red-700">
                          This field is required
                        </span>
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
                        defaultValue={quantity}
                        min="1"
                        max="20"
                        {...register("quantity", { required: true })}
                      />
                      {errors.quantity && (
                        <span className="text-red-700">
                          This field is required
                        </span>
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
                    defaultValue={details}
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
              value="Update Item"
            />
          </form>
        </div>
      </Modal>
    </tr>
  );
};

MyFoodCard.propTypes = {
  food: PropTypes.object,
};
export default MyFoodCard;
