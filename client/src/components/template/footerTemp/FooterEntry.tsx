import React from "react";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { FaTelegram, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

function FooterEntry() {
  return (
    <div className="absolute -bottom-5   mx-auto lg:px-10 md:py-4 py-2 bg-background-20 rounded-md w-full">
      <div className="flex flex-row  justify-between md:gap-10 gap-4 px-4 items-center ">
        <div className="flex flex-col md:flex-row gap-2 xl-gap-16 justify-center w-full  xl:items-betweeen items-start md:items-center">
          <div className="text-accent-30 flex flex-row justify-between gap-2 items-center ">
            <h1 className="md:text-4xl text-3xl font-bold">میشا لند</h1>
            <RiShoppingBag4Fill className="size-5" />
          </div>
          <p className="md:text-xl text-base font-semibold">
            پوشاکی برای هر روز، هر فصل, هر سبک
          </p>
        </div>
        <div className=" flex  flex-row  gap-2  justify-end lg:w-sm  lg:pr-10">
          <Link to="#">
            <FaTelegram className="size-14 md:size-10 text-primary-30 hover:text-primary-20" />
          </Link>
          <Link to="#">
            <FaInstagram className="size-14 md:size-10 text-primary-30 hover:text-primary-20" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterEntry;
