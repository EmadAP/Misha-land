import * as React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

import menImg from "@/assets/products/men-1.png";
import womenImg from "@/assets/products/women-1.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavMenuDesktop() {
  return (
    <NavigationMenu dir="rtl">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>مردانه</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex flex-row-reverse items-center justify-between gap-2 md:w-[500px] lg:w-[600px]">
              <div className="bg-accent-10 relative w-[50%] h-[600px] rounded-md overflow-hidden">
                <img
                  src={menImg}
                  alt="men-image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <a
                  href="#"
                  className="absolute inset-0 flex flex-col justify-end p-6 text-accent-30 no-underline rounded-md"
                />
              </div>
              <div className="py-4 flex flex-col items-start justify-between gap-20 w-[50%] h-[600px]">
                <a
                  href="#"
                  className="w-full group px-2 border-r-3 border-r-accent-20 flex flex-row gap-2 items-center"
                >
                  <span className="text-xl font-semibold">پوشاک مردانه</span>
                  <MdKeyboardArrowLeft
                    size={25}
                    className="group-hover:text-accent-20"
                  />
                </a>
                <div className="w-full flex flex-col justify-between gap-10 items-start">
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-accent-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">تی‌شرت</span>
                  </a>
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-accent-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">پیراهن</span>
                  </a>
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-accent-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">هودی / سویشرت</span>
                  </a>
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-accent-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">پلیور / بافت</span>
                  </a>
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-accent-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">کت و شلوار</span>
                  </a>
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-accent-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">شلوار کتان</span>
                  </a>
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-accent-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">شلوار جین</span>
                  </a>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>زنانه</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex flex-row-reverse items-center justify-between gap-2 md:w-[500px] lg:w-[600px]">
              <div className="bg-primary-10 relative w-[50%] h-[600px] rounded-md overflow-hidden">
                <img
                  src={womenImg}
                  alt="men-image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <a
                  href="#"
                  className="absolute inset-0 flex flex-col justify-end p-6 text-primary-30 no-underline rounded-md"
                />
              </div>
              <div className="py-4 flex flex-col items-start justify-between gap-20 w-[50%] h-[600px]">
                <a
                  href="#"
                  className="w-full group px-2 border-r-3 border-r-primary-20 flex flex-row gap-2 items-center"
                >
                  <span className="text-xl font-semibold">پوشاک زنانه</span>
                  <MdKeyboardArrowLeft
                    size={25}
                    className="group-hover:text-primary-20"
                  />
                </a>
                <div className="w-full flex flex-col justify-between gap-10 items-start">
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-primary-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">تی‌شرت</span>
                  </a>
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-primary-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">پیراهن</span>
                  </a>
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-primary-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">هودی / سویشرت</span>
                  </a>
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-primary-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">پلیور / بافت</span>
                  </a>
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-primary-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">کت و شلوار</span>
                  </a>
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-primary-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">شلوار کتان</span>
                  </a>
                  <a
                    href="#"
                    className="hover:underline w-full px-2 border-r-3 border-r-primary-20 flex flex-row gap-2 items-center"
                  >
                    <span className="text-md">شلوار جین</span>
                  </a>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex flex-row-reverse items-center justify-between gap-2 md:w-[500px] lg:w-[600px]">
              <div className="relative w-[50%] h-[500px] rounded-md overflow-hidden">
                <img
                  src={menImg}
                  alt="men-image"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <a
                  href="/"
                  className="absolute inset-0 flex flex-col justify-end p-6 text-accent-30 no-underline rounded-md"
                >
                  <div className="text-lg font-medium mb-2">shadcn/ui</div>
                  <p className="text-sm opacity-90">
                    Beautifully designed components built with Tailwind CSS.
                  </p>
                </a>
              </div>
              <div className="w-[50%] h-[500px]">
                <a href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </a>
                <a href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </a>
                <a href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </a>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/docs">Docs</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
