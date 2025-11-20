import { MdKeyboardArrowLeft } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

interface CategoryColumnProps {
  title: string;
  items: string[];
  href: string;
}

export default function CategoryColumn({
  title,
  items,
  href,
}: CategoryColumnProps) {
  return (
    <div className="py-4 flex flex-col items-start justify-baseline gap-6 w-1/3 h-[600px]">
      <a
        href="#"
        className="w-full group px-2 border-r-3 border-r-primary-30 flex flex-row gap-2 items-center"
      >
        <span className="text-xl font-semibold">{title}</span>
        <MdKeyboardArrowLeft
          size={25}
          className="group-hover:text-primary-30"
        />
      </a>

      <Separator />

      <div className="w-full flex flex-col justify-between gap-6 items-start">
        {items.map((item, i) => (
          <a
            key={i}
            href={href}
            className="hover:underline w-full px-2 border-r-3 border-r-primary-30 flex flex-row gap-2 items-center"
          >
            <span className="text-md">{item}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
