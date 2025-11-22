import React from "react";
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function FooterInfo() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-start justify-between gap-10 items-start pt-30 pb-10">
      <div className="flex flex-col gap-2 items-start">
        <div className="flex flex-row items-center gap-2">
          <FaLocationDot className="text-primary-30" />
          <p className="text-text-10/80 text-sm pt-2 ">
            <span className=" font-bold text-text-10">دفتر مرکزی</span> - تهران،
            خیابان حافظ، بالاتر از زرتشت، کوچه جاوید، پلاک ۲۴
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <IoMdMail className="text-primary-30" />
          <p className="text-text-10/80 text-sm pt-2 ">
            <span className=" font-bold text-text-10">کد پستی:</span> 111111111{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <FaPhoneFlip className="text-primary-30" />
        <p className="text-text-10/80 text-sm pt-2 ">
          <span className=" font-bold text-text-10">تلفن: 91005666-021</span> -
          (شنبه تا چهارشنبه از ۹ الی ۱۸)
        </p>
      </div>
    </div>
  );
}

export default FooterInfo;
