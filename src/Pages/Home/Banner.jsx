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
    <section className=" mt-36 md:mt-16  ">
      <div className="container flex flex-col gsp-5 justify-center items-center  mx-auto  md:flex-row-reverse lg:justify-between h-[400px] md:h-[500px] lg:h-[650px]">
        <div className="h-[250px] md:h-[350px] lg:h-[500px] w-[calc(100vw-20px)] md:w-1/2 lg:w-[500px]  flex items-center">
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
        <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg md:text-left mt-7 ">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-none">
            Meet, Eat & Enjoy <br /> the true taste
            {/* <span className="dark:text-violet-600">senectus</span>erat pharetra */}
          </h1>
          <p className="mt-6 mb-8 text-sm md:text-base lg:text-lg sm:mb-12">
            The food places is an neighborhood restaurent serving
            <br />
            seassonal global cuisine driven by the faire
          </p>
          <Link to="/all-food">
            <button className="btn btn-sm btn-primary">See All</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
