import React from "react";
import MaxWidthWrapper from "../../hooks/MaxWithWrapper";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { NavMenuDesktop } from "../template/NavbarTemp/NavMenuDesktop";
import NavAuthBtns from "../template/NavbarTemp/NavAuthBtns";

function Navbar() {
  return (
    <nav className="fixed w-full h-18 bg-transparent backdrop-blur-lg border-b-2 border-b-primary-30">
      <MaxWidthWrapper>
        <div className=" flex flex-row items-center justify-between gap-10 h-full">
          <div className="flex flex-row justify-between gap-10 items-center">
            <div className="text-accent-30 flex flex-row justify-between gap-2 items-center">
              <p className="text-2xl font-semibold">میشا لند</p>
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
