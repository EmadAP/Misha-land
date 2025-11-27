import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaRegUser } from "react-icons/fa6";
import type { UserResource } from "@clerk/types";
import { Link } from "react-router-dom";
import {
  MdDashboardCustomize,
  MdOutlineShoppingBag,
  MdFavoriteBorder,
} from "react-icons/md";
import { LuMilestone } from "react-icons/lu";
import { BiSolidUserDetail } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { useClerk } from "@clerk/clerk-react";

interface NavDropDownProps {
  user: UserResource | null | undefined;
}

function NavDropDown({ user }: NavDropDownProps) {
  const { signOut } = useClerk();

  return (
    <DropdownMenu modal={false} dir="rtl">
      <DropdownMenuTrigger asChild>
        <button className="hover:bg-background-20 p-2 rounded-full outline-none">
          <FaRegUser size={20} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="capitalize">
          {user?.username}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              to="/my-account/dashboard"
              className="flex flex-row justify-start gap-8 items-center w-full h-full px-2 py-1.5"
            >
              <MdDashboardCustomize className="text-text-10" />
              پیشخوان
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="mr-10" />
          <DropdownMenuItem>
            <Link
              to="/my-account/orders"
              className="flex flex-row justify-start gap-8 items-center w-full h-full px-2 py-1.5"
            >
              <MdOutlineShoppingBag className="text-text-10" />
              سفارش ها
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="mr-10" />
          <DropdownMenuItem>
            <Link
              to="/my-account/addresses"
              className="flex flex-row justify-start gap-8 items-center w-full h-full px-2 py-1.5"
            >
              <LuMilestone className="text-text-10" />
              آدرس
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="mr-10" />
          <DropdownMenuItem>
            <Link
              to="/my-account/account-details"
              className="flex flex-row justify-start gap-8 items-center w-full h-full px-2 py-1.5"
            >
              <BiSolidUserDetail className="text-text-10" />
              جزئیات حساب
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="mr-10" />
          <DropdownMenuItem>
            <Link
              to="/my-account/wishlist"
              className="flex flex-row justify-start gap-8 items-center w-full h-full px-2 py-1.5"
            >
              <MdFavoriteBorder className="text-text-10" />
              علاقه مندی ها
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <button
            onClick={() => signOut()}
            className="flex flex-row items-center justify-start gap-8 text-white w-full h-full px-2 py-1.5"
          >
            <CiLogout className="text-white" />
            خروج از حساب کاربری
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NavDropDown;
