const GalleryCard = ({ feedBack }) => {
  const { image, feedback_provider, feedback } = feedBack;
  return (
    <div className="relative group">
      <div
        className="h-60 rounded-lg"
        style={{
          background: `url('${image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center  bg-black bg-opacity-60 rounded-lg opacity-0 group-hover:opacity-100 transition duration-700 p-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            {feedback_provider}
          </h2>
          <h4 className="text-base md:text-lg lg:text-xl text-white">
            {feedback}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
