import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
const SingleFood = () => {
  const food = useLoaderData();
  const {
    _id,
    name,
    image,
    category,
    origin,
    price,
    made_by,
    details,
    quantity,
    purchase_count,
  } = food;
  return (
    <div className="mt-28 container mx-auto  px-3 md:px-5 lg:px-0 mb-10">
      <Helmet>
        <title>FoodVilla | Food Details</title>
      </Helmet>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-16 h-[calc(100vh-425px)] border border-dark-15  p-5 rounded-xl">
        <div className="rounded-2xl lg:w-1/2 flex justify-center items-center">
          <img
            className="rounded-xl md:h-[400px] lg:h-full"
            src={image}
            alt="Clay made pottery"
          />
        </div>
        <div className="font-worksans lg:w-1/2 flex flex-col">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-playfair text-dark">
            {name}
          </h1>
          <p className="text-base md:text-xl font-medium text-dark-8 my-3 md:my-3 lg:my-4">
            {category}
          </p>

          <hr />

          <hr />
          <p className="text-sm md:text-base text-dark-7 py-3 md:py-4 lg:py-5 grow">
            <span className="font-bold text-dark">Details :</span> {details}
          </p>
          <div className="flex justify-between mt-5 text-dark-8 font-medium mb-5 text-base md:text-xl">
            <div className="flex items-center gap-1">
              <p>
                <span className="mr-2">AvailAble :</span> {quantity}{" "}
                <span>pices</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p>
                <span className="mr-2">Purchased :</span> {purchase_count}{" "}
                <span>pices</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-5 text-dark-8 font-medium mb-5 text-base md:text-xl">
            <div className="flex items-center gap-1">
              <p>{price}</p>
            </div>
            <div className="flex items-center gap-2">
              <p>{origin}</p>
            </div>
          </div>
          <hr />
          <div className="flex justify-between items-center mt-5">
            <div className="flex gap-2 items-center">
              <h2 className=" text-2xl text-green-500 font-bold">{made_by}</h2>
            </div>

            <Link to={`/purchase-food/${_id}`}>
              <button className="btn btn-accent">Purchase</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
