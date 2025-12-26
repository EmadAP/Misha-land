import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

export default function CollectionsCarouselSkeleton() {
  return (
    <section className="py-10">
      <div className="mb-4 pr-2">
        <Skeleton className="h-6 w-64 rounded-md" />
      </div>

      <div className="relative py-3">
        <Carousel opts={{ align: "start" }} className="w-full" dir="ltr">
          <div className="absolute -top-13 left-1 mt-2 z-10 flex gap-4">
            <CarouselPrevious className="static w-auto h-auto p-2 border-0 bg-primary-30 text-white opacity-50 cursor-default" />
            <CarouselNext className="static w-auto h-auto p-2 border-0 bg-primary-30 text-white opacity-50 cursor-default" />
          </div>

          <CarouselContent>
            {Array.from({ length: 3 }).map((_, i) => (
              <CarouselItem
                key={i}
                className="md:basis-1/2 lg:basis-1/3"
                dir="rtl"
              >
                <div className="p-1">
                  <Card className="p-0">
                    <CardContent className="aspect-square p-0">
                      <div className="w-full h-full p-4 flex flex-col gap-8">
                        <Skeleton className="w-full h-4/5 rounded-lg" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
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
