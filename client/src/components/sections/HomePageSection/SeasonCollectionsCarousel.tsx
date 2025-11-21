import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export function SeasonCollectionsCarousel() {
  return (
    <section className="py-10 ">
      <div className="mb-4 flex justify-between items-center ">
        <Link
          to="#"
          className="text-xl flex flex-row gap-3 items-center justify-between font-semibold capitalize hover:text-primary-30"
        >
          پرفروش ترین های پاییزی
          <FaArrowLeftLong />
        </Link>
      </div>

      <div className="relative py-3">
        <Carousel opts={{ align: "start" }} className="w-full" dir="rtl">
          <div className="absolute -top-13 left-1 mt-2 z-10 flex gap-4">
            <CarouselNext className="shadow-lg static w-auto h-auto p-2 border-0 bg-slate-900 text-white hover:text-orange-500 cursor-pointer" />
            <CarouselPrevious className="shadow-lg static w-auto h-auto p-2 border-0 bg-slate-900 text-white hover:text-orange-500 cursor-pointer" />
          </div>

          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
