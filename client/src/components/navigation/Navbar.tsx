import React from "react";
import MaxWidthWrapper from "../../hooks/MaxWithWrapper";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { NavMenuDesktop } from "../template/navbarTemp/NavMenuDesktop";
import NavAuthBtns from "../template/navbarTemp/NavAuthBtns";

function Navbar() {
  return (
    <nav className="fixed w-full h-18 bg-background-10  border-b-2 border-b-primary-30 z-50">
      <MaxWidthWrapper>
        <div className=" flex flex-row items-center justify-between gap-10 h-full">
          <div className="flex flex-row justify-between gap-10 items-center">
            <div className="text-accent-30 flex flex-row justify-between gap-2 items-center">
              <h1 className="text-2xl font-semibold">میشا لند</h1>
              <RiShoppingBag4Fill size={25} />
            </div>
            <NavMenuDesktop />
          </div>
          <NavAuthBtns />
        </div>
      </MaxWidthWrapper>
    </nav>
  );
}

export default Navbar;
