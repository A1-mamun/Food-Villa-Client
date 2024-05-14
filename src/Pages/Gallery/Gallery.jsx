import { useEffect, useState } from "react";
import bgImage from "../../assets/bg-img-1.jpg";
import axios from "axios";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [feedBacks, setFeedBacks] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/feedbacks`);
      setFeedBacks(data);
    };
    getData();
  }, []);
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
        <button className="btn btn-primary btn-sm mt-10">Add Review</button>
      </div>
    </div>
  );
};

export default Gallery;
