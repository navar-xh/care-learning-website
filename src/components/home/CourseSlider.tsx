"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SliderList = [
  {
    id: 1,
    title: "Nurse",
    bg_image: "/images/bg-slider-1.png",
    emp_image: "/images/img-slider-1.png",
  },
  {
    id: 2,
    title: "socialcare worker",
    bg_image: "/images/bg-slider-2.png",
    emp_image: "/images/img-slider-2.png",
  },
  {
    id: 3,
    title: "Chef",
    bg_image: "/images/bg-slider-3.png",
    emp_image: "/images/img-slider-3.png",
  },
  {
    id: 4,
    title: "socialcare worker",
    bg_image: "/images/bg-slider-2.png",
    emp_image: "/images/img-slider-2.png",
  },
  {
    id: 5,
    title: "worker",
    bg_image: "/images/bg-slider-1.png",
    emp_image: "/images/img-slider-1.png",
  },
];

function CourseSlider() {
  const swiper = useSwiper();

  return (
    <section className="course-slider">
      <div className="container mx-auto">
        <div className="header-row text-center">
          <h2>
            <span>Online healthcare courses</span>
          </h2>
          <p className="w-[80%] m-auto pt-5 pb-10">
            Explore our courses, where specialized learning meets your career
            needs. From nursing essentials to healthcare management, our curated
            courses ensure targeted development for professionals like you
          </p>
          <Link href="" className="primary-btn flex items-center gap-3">
            Get Started
            <span>
              <Image
                src="/images/icons/icon-arrow.svg"
                alt="carelarning"
                width={20}
                height={20}
              />
            </span>
          </Link>
        </div>

        <div className="slider-row relative">
          <Swiper
            modules={[Navigation]}
            navigation={false}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              // Mobile
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // Tablet
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              // Desktop
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {SliderList.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="slider-single h-full flex flex-col justify-between"
                  style={{
                    backgroundImage: `url(${item.bg_image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <h4 className="text-center">{item.title}</h4>
                  <Image
                    src={item.emp_image}
                    alt="carelearnig"
                    width={500}
                    height={500}
                    className="slider-inner-img"
                  />
                </div>
              </SwiperSlide>
            ))}

            <SliderNavigation />
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CourseSlider;

export function SliderNavigation() {
  const swiper = useSwiper();

  return (
    <div className="arrow-row absolute bottom-0 right-0 z-2 flex items-center gap-5">
      <button onClick={() => swiper.slidePrev()} className="primary-btn">
        <span>
          <Image
            src="/images/icons/icon-arrow.svg"
            alt="carelarning"
            width={20}
            height={20}
            className="rotate-180"
          />
        </span>
      </button>
      <button onClick={() => swiper.slideNext()} className=" z-10 primary-btn">
        <span>
          <Image
            src="/images/icons/icon-arrow.svg"
            alt="carelarning"
            width={20}
            height={20}
            className=""
          />
        </span>
      </button>
    </div>
  );
}
