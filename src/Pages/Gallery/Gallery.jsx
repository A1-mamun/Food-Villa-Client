import { useEffect, useState } from "react";
import bgImage from "../../assets/bg-img-1.jpg";
import axios from "axios";
import GalleryCard from "./GalleryCard";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import toast from "react-hot-toast";

const Gallery = () => {
  const [feedBacks, setFeedBacks] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/feedbacks`);
      setFeedBacks(data);
    };
    getData();
  }, [modalIsOpen]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    // console.log(data);
    axios
      .post(`${import.meta.env.VITE_API_URL}/feedback`, data, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        const data = res.data;
        if (data?.insertedId) {
          toast.success("Feedback added successfully");
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
    <div className="mt-32 container mx-auto">
      <div
        className="h-[calc(100vh-200px)] rounded-lg"
        style={{
          background: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-full flex justify-center items-center bg-gradient-to-t from-[#1b1820e5]  to-[#150B2B22] rounded-lg">
          <h2 className="text-5xl font-bold"> Foods Gallery</h2>
        </div>
      </div>
      <div className="my-14 container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-14">Customer Review</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {feedBacks.map((feedBack) => (
            <GalleryCard key={feedBack._id} feedBack={feedBack}></GalleryCard>
          ))}
        </div>
        <button onClick={openModal} className="btn btn-primary btn-sm mt-10">
          Add Feedback
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        // className=" top-1/2 left-1/2 bottom-auto right-auto mr-[-50%] transition -translate-x-1/2 -translate-y-1/2"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-400 rounded-xl"
      >
        <div className="w-[600px] bg-gray-200 rounded-xl px-5 md:px-8 lg:px-10 py-10 ">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl text-center mb-10
      "
          >
            Place your Feedback
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="form-control w-full">
              <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
                Your Name :
                <input
                  name="feedback_provider"
                  type="text"
                  className="grow text-gray-400"
                  placeholder="Enter your name"
                  {...register("feedback_provider", { required: true })}
                />
                {errors.feedback_provider && (
                  <span className="text-red-700">This field is required</span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
                Food Photo URL :
                <input
                  name="image"
                  type="text"
                  className="grow text-gray-400"
                  placeholder="Enter URL"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="text-red-700">This field is required</span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <label className="input input-bordered flex items-center gap-2 text-blue-300 text-sm md:text-base">
                Your Feedback :
                <input
                  name="feedback"
                  type="text"
                  className="grow text-gray-400"
                  placeholder="Enter your feedback"
                  {...register("feedback", { required: true })}
                />
                {errors.feedback && (
                  <span className="text-red-700">This field is required</span>
                )}
              </label>
            </div>

            <input
              type="submit"
              className="btn btn-block bg-green-500 text-white text-base md:text-lg"
              value="Add Feedback"
            />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Gallery;
