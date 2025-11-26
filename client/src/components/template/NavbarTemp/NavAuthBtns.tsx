import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { FiShoppingCart } from "react-icons/fi";
import NavDropDown from "@/components/sections/NavbarSection/NavDropDown";
import { Skeleton } from "@/components/ui/skeleton";

function NavAuthBtns() {
  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded) {
    return <Skeleton className="h-8 w-28" />;
  }
  return (
    <div className="flex flex-row items-center justify-between gap-5">
      <div>
        {!isSignedIn && (
          <Link
            to="/sign-in"
            className="py-1 px-4 border rounded-md border-primary-30 hover:bg-primary-30 hover:text-background-10 transition duration-150"
          >
            ورود | ثبت نام
          </Link>
        )}
        {isSignedIn && (
          <div className="flex flex-row gap-5 items-center justify-between">
            <NavDropDown user={user} />
            <Link
              to="/cart"
              className="hover:bg-background-20 p-2 rounded-full"
            >
              <FiShoppingCart size={20} />
            </Link>
          </div>
        )}
      </div>
      <div className="flex md:hidden">
        <GiHamburgerMenu size={20} />
      </div>
    </div>
  );
}

export default NavAuthBtns;
