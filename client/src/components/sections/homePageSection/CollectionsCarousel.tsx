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
import type { Product } from "@/lib/types/type";
import ProductItemCard from "../ProductItemCard";

interface CollectionsCarouselProps {
  season: string;
  products: Product[];
}

export function CollectionsCarousel({
  season,
  products,
}: CollectionsCarouselProps) {
  return (
    <section className="py-10 ">
      <div className="mb-4 flex justify-between items-center ">
        <Link
          to="#"
          className="text-xl flex flex-row gap-3 items-center justify-between font-semibold capitalize hover:text-primary-30"
        >
          پرفروش ترین های {season}
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
            {products.map((product) => (
              <CarouselItem
                key={product.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="p-0">
                    <CardContent className="aspect-square p-0">
                      <ProductItemCard product={product} />
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
