import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { MdKeyboardArrowLeft } from "react-icons/md";
import {
  navAccessoryItems,
  navMenItems,
  navWomenItems,
} from "@/lib/mock/dummylists";

type NavMobileSidebarProps = {
  open: boolean;
  onClose: () => void;
};

function NavMobileSidebar({ open, onClose }: NavMobileSidebarProps) {
  const menItems = navMenItems;
  const womenItems = navWomenItems;
  const accessoriesItems = navAccessoryItems;
  return (
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
            {menItems.map((item) => (
              <Link
                to={item.href}
                onClick={onClose}
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                {item.label}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>پوشاک زنانه</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {womenItems.map((item) => (
              <Link
                to={item.href}
                onClick={onClose}
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                {item.label}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>اکسسوری</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            {accessoriesItems.map((item) => (
              <Link
                to={item.href}
                onClick={onClose}
                className="hover:underline border-r border-r-primary-30 px-2"
              >
                {item.label}
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
        <Separator />

        <Link
          to="/browse"
          onClick={onClose}
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
  );
}

export default NavMobileSidebar;
