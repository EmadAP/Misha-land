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
              to="#"
              className="flex flex-row justify-start gap-8 items-center w-full"
            >
              <MdDashboardCustomize className="text-text-10" />
              پیشخوان
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="mr-10" />
          <DropdownMenuItem>
            <Link
              to="#"
              className="flex flex-row justify-start gap-8 items-center w-full"
            >
              <MdOutlineShoppingBag className="text-text-10" />
              سفارش ها
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="mr-10" />
          <DropdownMenuItem>
            <Link
              to="#"
              className="flex flex-row justify-start gap-8 items-center w-full"
            >
              <LuMilestone className="text-text-10" />
              آدرس
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="mr-10" />
          <DropdownMenuItem>
            <Link
              to="#"
              className="flex flex-row justify-start gap-8 items-center w-full"
            >
              <BiSolidUserDetail className="text-text-10" />
              جزئیات حساب
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="mr-10" />
          <DropdownMenuItem>
            <Link
              to="#"
              className="flex flex-row justify-start gap-8 items-center w-full"
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
            className="flex flex-row items-center justify-between gap-8 text-white"
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
