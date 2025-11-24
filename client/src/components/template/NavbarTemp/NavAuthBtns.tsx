import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";

function NavAuthBtns() {
  const user = false;
  return (
    <div className="flex flex-row items-center justify-between gap-5">
      <div>
        {!user && (
          <a
            href="#"
            className="py-1 px-4 border rounded-md border-primary-30 hover:bg-primary-30 hover:text-background-10 transition duration-150"
          >
            ورود | ثبت نام
          </a>
        )}
        {user && (
          <div className="flex flex-row gap-5 items-center justify-between">
            <FaRegUser size={30} />
            <FiShoppingCart size={30} />
          </div>
        )}
      </div>
      <div className="flex md:hidden">
        <GiHamburgerMenu size={30} />
      </div>
    </div>
  );
}

export default NavAuthBtns;
