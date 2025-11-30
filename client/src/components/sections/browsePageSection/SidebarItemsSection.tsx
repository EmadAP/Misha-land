import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

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
          <Slider defaultValue={[33]} max={100} step={1} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>رنگ</AccordionTrigger>
        <AccordionContent className="py-2 grid grid-cols-3 justify-between items-center gap-2">
          <button className="bg-black text-white rounded-md p-1">مشکی</button>
          <button className="bg-white text-black rounded-md p-1">سفید</button>
          <button className="bg-red-500 text-white rounded-md p-1">قرمز</button>
          <button className="bg-blue-500 text-white rounded-md p-1">آبی</button>
          <button className="bg-green-500 text-white rounded-md p-1">
            سبز
          </button>
          <button className="bg-yellow-500 text-white rounded-md p-1">
            زرد
          </button>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>سایز</AccordionTrigger>
        <AccordionContent className="py-2 grid grid-cols-2 justify-between items-center gap-4">
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="small">small</label>
            <Checkbox id="small" />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="medium">medium</label>
            <Checkbox id="medium" />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="large">large</label>
            <Checkbox id="large" />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="xLarge">x-large</label>
            <Checkbox id="xLarge" />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="xxLarge">2x-large</label>
            <Checkbox id="xxLarge" />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="xxxLarge">3x-large</label>
            <Checkbox id="xxxLarge" />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>فصل</AccordionTrigger>
        <AccordionContent className="py-2 grid grid-cols-2 justify-between items-center gap-4">
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="spring">بهار</label>
            <Checkbox id="spring" />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="summer">تابستان</label>
            <Checkbox id="summer" />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="fall">پاییز</label>
            <Checkbox id="fall" />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="winter">زمستان</label>
            <Checkbox id="winter" />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>موجود</AccordionTrigger>
        <AccordionContent className="py-2 grid grid-cols-1 justify-between items-center gap-4">
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="true">موجود در انبار</label>
            <Checkbox id="true" />
          </div>
          <div className="flex items-center justify-between gap-1">
            <label htmlFor="false">همه محصولات</label>
            <Checkbox id="false" />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>دسته بندی</AccordionTrigger>
        <AccordionContent className="">
          <p>
            We stand behind our products with a comprehensive 30-day return
            policy. If you&apos;re not completely satisfied, simply return the
            item in its original condition.
          </p>
          <p>
            Our hassle-free return process includes free return shipping and
            full refunds processed within 48 hours of receiving the returned
            item.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default SidebarItemsSection;
