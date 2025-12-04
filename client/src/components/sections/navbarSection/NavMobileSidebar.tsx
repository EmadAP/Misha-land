import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { MdKeyboardArrowLeft } from "react-icons/md";

function NavMobileSidebar({ open }: { open: boolean }) {
  return (
    <>
      {/* <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      /> */}

      <div
        className={`
          fixed top-18 left-0 h-full w-full bg-background-10 z-50 shadow-xl
          transition-transform duration-500
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Accordion
          type="single"
          collapsible
          className="w-full px-4 py-2"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>پوشاک مردانه</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                تی‌شرت
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                پیراهن
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                هودی / سویشرت
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                پلیور / بافت
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                کت و شلوار
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                شلوار کتان
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                شلوار جین
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>پوشاک زنانه</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                تی‌شرت
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                پیراهن
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                هودی / سویشرت
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                پلیور / بافت
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                کت و شلوار
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                شلوار کتان
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                شلوار جین
              </Link>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>اکسسوری</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                کیف
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                کفش
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                کلاه
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                جواهرات
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                شال و روسری
              </Link>
              <Link
                to="#"
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                ست کادویی
              </Link>
            </AccordionContent>
          </AccordionItem>
          <Separator />

          <Link
            to="/browse"
            className="group py-4 flex flex-row items-center justify-between"
          >
            <span className="text-lg font-semibold group-hover:underline">
              فروشگاه
            </span>
            <MdKeyboardArrowLeft
              size={20}
              className="group-hover:text-primary-30"
            />
          </Link>
        </Accordion>
      </div>
    </>
  );
}

export default NavMobileSidebar;
