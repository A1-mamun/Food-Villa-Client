import { Link } from "react-router-dom";
import img404 from "../../assets/404.jpg";

const ErrorPage = () => {
  return (
    <div className=" container mx-auto mt-10 rounded-xl text-center">
      <img
        className="h-[calc(100vh-170px)] w-full rounded-xl"
        src={img404}
        alt="Error Gif"
      />
      <Link to="/">
        <button className="btn btn-error my-10">Back Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
