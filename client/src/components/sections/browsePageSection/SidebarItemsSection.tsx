import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";
import SidebarSubItemsSection from "./SidebarSubItemsSection";
import { SliderSection } from "./SliderSection";

function SidebarItemsSection() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>قیمت</AccordionTrigger>
        <AccordionContent className="py-2">
          <SliderSection
            min={0}
            max={5_000_000}
            step={100_000}
            defaultValue={[2_000_000, 10_000_000]}
            onValueChange={([min, max]) => {
              console.log("filter price:", min, max);
            }}
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>رنگ</AccordionTrigger>
        <AccordionContent className="py-2 grid grid-cols-4 justify-between items-center gap-2">
          <button className="rounded-full h-4 w-4 p-3 mx-auto bg-black"></button>
          <button className="rounded-full h-4 w-4 p-3 mx-auto border border-primary-30 bg-white"></button>
          <button className="rounded-full h-4 w-4 p-3 mx-auto bg-red-500"></button>
          <button className="rounded-full h-4 w-4 p-3 mx-auto bg-blue-500"></button>
          <button className="rounded-full h-4 w-4 p-3 mx-auto bg-green-500"></button>
          <button className="rounded-full h-4 w-4 p-3 mx-auto bg-yellow-500"></button>
          <button className="rounded-full h-4 w-4 p-3 mx-auto bg-yellow-900"></button>
          <button className="rounded-full h-4 w-4 p-3 mx-auto bg-gray-500"></button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>سایز</AccordionTrigger>
        <AccordionContent className="py-2 grid grid-cols-2 justify-between items-center gap-4">
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="small">small</label>
            <Checkbox
              id="small"
              className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="medium">medium</label>
            <Checkbox
              id="medium"
              className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="large">large</label>
            <Checkbox
              id="large"
              className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="xLarge">x-large</label>
            <Checkbox
              id="xLarge"
              className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="xxLarge">2x-large</label>
            <Checkbox
              id="xxLarge"
              className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="xxxLarge">3x-large</label>
            <Checkbox
              id="xxxLarge"
              className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>فصل</AccordionTrigger>
        <AccordionContent className="py-2 grid grid-cols-2 justify-between items-center gap-4">
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="spring">بهار</label>
            <Checkbox
              id="spring"
              className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="summer">تابستان</label>
            <Checkbox
              id="summer"
              className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="fall">پاییز</label>
            <Checkbox
              id="fall"
              className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="winter">زمستان</label>
            <Checkbox
              id="winter"
              className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>موجود</AccordionTrigger>
        <AccordionContent className="py-2 grid grid-cols-1 justify-between items-center gap-4">
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="true">موجود در انبار</label>
            <Checkbox
              id="true"
              className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
            />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="false">همه محصولات</label>
            <Checkbox
              id="false"
              className="data-[state=checked]:bg-accent-30 data-[state=checked]:border-accent-30"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>دسته بندی</AccordionTrigger>
        <AccordionContent className="p-0">
          <SidebarSubItemsSection />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default SidebarItemsSection;
