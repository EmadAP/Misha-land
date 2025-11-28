import React from "react";
import menBannerImg from "@/assets/banner/landing/menMainBanner2.jpg";
import womenBannerImg from "@/assets/banner/landing/womanMainBanner2.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";

function HomeLandingBanner() {
  return (
    <div className="flex flex-row items-center justify-center w-full ">
      <div className="group relative w-1/2 min-h-[93vh] overflow-hidden">
        <img
          src={menBannerImg}
          alt="men banner"
          className="group-hover:scale-110 absolute inset-0 w-full h-full object-cover transition duration-300"
        />
        <a
          href="#"
          className="absolute inset-0 items-end flex flex-col justify-end p-6 transition duration-300 pb-10 no-underline"
        >
          <span className="bg-background-10 flex flex-row items-center justify-between gap-4 px-6 py-2 font-semibold md:text-2xl text-lg rounded-md">
            کالکشن مردانه
            <FaArrowLeftLong size={20} />
          </span>
        </a>
      </div>
      <div className="group relative w-1/2 min-h-[93vh] overflow-hidden">
        <img
          src={womenBannerImg}
          alt="women banner"
          className="group-hover:scale-110 absolute inset-0 w-full h-full object-cover transition duration-300"
        />
        <a
          href="#"
          className="absolute inset-0 items-end flex flex-col justify-end p-6 transition duration-300 pb-10 no-underline"
        >
          <span className="bg-background-10 flex flex-row items-center justify-between gap-4 px-6 py-2 font-semibold md:text-2xl text-lg rounded-md">
            کالکشن زنانه
            <FaArrowLeftLong size={20} />
          </span>
        </a>
      </div>
    </div>
  );
}

export default HomeLandingBanner;
