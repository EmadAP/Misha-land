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

function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}


export function CollectionsCarousel({
  season,
  products,
}: CollectionsCarouselProps) {
  const preview = getRandomItems(products, 5); 

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
            <CarouselNext className="transition-all duration-200 static w-auto h-auto p-2 border-0 bg-primary-30 text-white hover:text-primary-30 cursor-pointer" />
            <CarouselPrevious className="transition-all duration-200 static w-auto h-auto p-2 border-0 bg-primary-30 text-white hover:text-primary-30 cursor-pointer" />
          </div>
          <CarouselContent>
            {preview.map((product) => (
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
