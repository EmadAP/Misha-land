import React from "react";
import { Link } from "react-router-dom";
import menBannerImg from "@/assets/banner/landing/menMainBanner2.jpg";
import womenBannerImg from "@/assets/banner/landing/womanMainBanner2.jpg";
import { Button } from "@/components/ui/button";

function ClothCollectionBanner() {
  return (
    <Link to="#">
      <div className="relative flex flex-row items-center justify-center gap-2 rounded-md overflow-hidden max-w-screen-xl mx-auto mb-10">
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center lg:h-64 lg:w-64 h-40 w-40 rounded-full bg-background-10/30 backdrop-blur-lg z-10" />
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-2 lg:gap-4 lg:h-52 lg:w-52 h-32 w-32 rounded-full bg-background-10/50 backdrop-blur-lg z-10 text-center">
          <span className="lg:text-xl text-base font-semibold">
            پوشاک مردانه و زنانه پاییزی
          </span>
          <Button className="lg:px-6 px-4 lg:text-lg  rounded-4xl bg-primary-30 hover:bg-primary-30">
            خرید
          </Button>
        </div>
        <div className=" relative w-full h-96 overflow-hidden rounded-r-md rounded-l-full">
          <img
            src={menBannerImg}
            alt="men banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className=" relative w-full h-96 overflow-hidden rounded-l-md rounded-r-full">
          <img
            src={womenBannerImg}
            alt="men banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
}

export default ClothCollectionBanner;
