import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import slide1 from "../../assets/Banner/banner-1.jpg";
import slide2 from "../../assets/Banner/banner-2.jpg";
import slide3 from "../../assets/Banner/banner-3.jpg";
import slide4 from "../../assets/Banner/banner-4.jpg";
import slide5 from "../../assets/Banner/banner-5.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800 mt-16 ">
      <div className="container flex flex-col justify-center items-center  mx-auto  lg:flex-row lg:justify-between  h-[650px]">
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Meet, Eat & Enjoy <br /> the true taste
            {/* <span className="dark:text-violet-600">senectus</span>erat pharetra */}
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            The food places is an neighborhood restaurent serving
            <br />
            seassonal global cuisine driven by the faire
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              to="/all-food"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
            >
              See All
            </Link>
          </div>
        </div>
        <div className="h-[500px] w-[500px]  flex items-center">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full w-full"
          >
            <SwiperSlide>
              <img
                className="h-full w-full rounded-xl"
                src={slide1}
                alt="slide1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full rounded-xl"
                src={slide2}
                alt="slide1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full rounded-xl"
                src={slide3}
                alt="slide1"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                className="h-full w-full rounded-xl"
                src={slide4}
                alt="slide1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-full w-full rounded-xl"
                src={slide5}
                alt="slide1"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
