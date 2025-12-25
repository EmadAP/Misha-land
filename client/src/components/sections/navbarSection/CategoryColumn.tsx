import { MdKeyboardArrowLeft } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

interface CategoryColumnProps {
  title: string;
  link: string;
  items: {
    label: string;
    href: string;
  }[];
}

export default function CategoryColumn({
  title,
  link,
  items,
}: CategoryColumnProps) {
  return (
    <div className="py-4 flex flex-col items-start justify-baseline gap-6 w-1/2 h-[600px]">
      <Link
        to={link}
        className="w-full group px-2 border-r-3 border-r-primary-30 flex flex-row gap-2 items-center"
      >
        <span className="text-xl font-semibold">{title}</span>
        <MdKeyboardArrowLeft
          size={25}
          className="group-hover:text-primary-30"
        />
      </Link>

      <Separator />

      <div className="w-full flex flex-col justify-between gap-6 items-start">
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="hover:underline w-full px-2 border-r-3 border-r-primary-30 flex flex-row gap-2 items-center"
          >
            <span className="text-md">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
