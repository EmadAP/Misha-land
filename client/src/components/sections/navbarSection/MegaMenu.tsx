import CategoryColumn from "@/components/sections/navbarSection/CategoryColumn";
import CategoryImageSection from "@/components/sections/navbarSection/CategoryImageSection";
import { Separator } from "@/components/ui/separator";

interface MegaMenuProps {
  image: string;
  columns: {
    title: string;
    items: string[];
    href: string;
  }[];
}

export default function MegaMenu({ image, columns }: MegaMenuProps) {
  return (
    <div className="flex flex-row-reverse items-center h-[600px] justify-between gap-2 md:w-[700px] lg:w-[900px]">
      <CategoryImageSection image={image} />

      {columns.map((col, index) => (
        <>
          <CategoryColumn
            key={col.title}
            title={col.title}
            items={col.items}
            href={col.href}
          />
          {index === 0 && <Separator orientation="vertical" />}
        </>
      ))}
    </div>
  );
}
