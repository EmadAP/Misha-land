import CategoryColumn from "@/components/sections/navbarSection/CategoryColumn";
import CategoryImageSection from "@/components/sections/navbarSection/CategoryImageSection";

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
    <div className="flex flex-row-reverse items-center h-[600px] justify-between gap-2 md:w-[600px] lg:w-[800px]">
      <CategoryImageSection image={image} />

      {columns.map((col) => (
        <CategoryColumn
          key={col.title}
          title={col.title}
          items={col.items}
          href={col.href}
        />
      ))}
    </div>
  );
}
