import React from "react";
import ProtectedPageBanner from "@/assets/banner/protectedBanner.png";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";
import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function ProtectedLayoutBanner() {
  const { pathname } = useLocation();

  const pages = [
    { to: "/my-account/dashboard", label: "پیشخوان" },
    { to: "/my-account/orders", label: "سفارش ها" },
    { to: "/my-account/addresses", label: "آدرس" },
    { to: "/my-account/account-details", label: "جزئیات حساب" },
    { to: "/my-account/wishlist", label: "علاقه مندی ها" },
  ];

  return (
    <div className="w-full h-72 overflow-hidden bg-primary-10">
      <MaxWidthWrapper className="pl-0 md:pl-0 pr-3 md:pr-10">
        <div className="relative w-full h-full">
          <img
            src={ProtectedPageBanner}
            alt="banner"
            className="absolute left-0 h-full object-cover md:object-contain"
          />

          <div className="absolute inset-0 items-start flex flex-col justify-start pt-5">
            <div className="bg-background-10 w-72 flex flex-col gap-4 px-6 py-4 rounded-md">
              <span className="font-semibold md:text-2xl text-lg">
                صفحه حساب کاربری من
              </span>

              <div className="flex flex-col gap-3 relative">
                {pages.map((page) => {
                  const active = pathname === page.to;

                  return (
                    <div key={page.to} className="relative flex items-center">
                      {active && (
                        <div className="absolute right-0 top-1 flex items-center gap-1 text-accent-30">
                          <FaHome size={15} />
                          <MdOutlineKeyboardArrowLeft size={15} />
                        </div>
                      )}

                      <Link
                        to={page.to}
                        className={`transition text-sm md:text-base pr-10 ${
                          active
                            ? "text-accent-30 font-semibold"
                            : "hover:text-accent-30 hover:underline"
                        }`}
                      >
                        {page.label}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default ProtectedLayoutBanner;
