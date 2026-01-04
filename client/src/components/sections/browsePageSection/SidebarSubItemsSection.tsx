import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import {
  navAccessoryItems,
  navMenItems,
  navWomenItems,
} from "@/lib/mock/dummylists";

function SidebarSubItemsSection() {
  const menItems = navMenItems;
  const womenItems = navWomenItems;
  const accessoriesItems = navAccessoryItems;
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm">پوشاک مردانه</AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-2 items-start  ">
            {menItems.map((item) => (
              <div className="flex items-center justify-between gap-1">
                <label htmlFor={item.label}>{item.label}</label>
                <Checkbox
                  id={item.label}
                  className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
                />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-sm">پوشاک زنانه</AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-2 items-start  ">
            {womenItems.map((item) => (
              <div className="flex items-center justify-between gap-1">
                <label htmlFor={item.label}>{item.label}</label>
                <Checkbox
                  id={item.label}
                  className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
                />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-sm">اکسسوری</AccordionTrigger>
          <AccordionContent className="grid grid-cols-2 gap-2 items-start  ">
            {accessoriesItems.map((item) => (
              <div className="flex items-center justify-between gap-1">
                <label htmlFor={item.label}>{item.label}</label>
                <Checkbox
                  id={item.label}
                  className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
                />
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default SidebarSubItemsSection;
