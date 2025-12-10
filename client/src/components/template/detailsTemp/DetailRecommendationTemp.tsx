import ProductItemCard from "@/components/sections/ProductItemCard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetAllProducts } from "@/lib/api/client/queries";
import { collectionFa, type Product } from "@/lib/types/type";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

const DetailRecommendationTemp = ({ product }: Props) => {
  const { data: allProducts, isLoading, isError, error } = useGetAllProducts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (!allProducts) return <div>No products returned</div>;

  const products = allProducts.filter(
    (p) => p.collection === product.collection
  );

  const preview = getRandomItems(products, 5);
  return (
    <section className="py-10 ">
      <div className="mb-4 flex justify-between items-center ">
        <Link
          to="#"
          className="text-xl flex flex-row gap-3 items-center justify-between font-semibold capitalize hover:text-primary-30"
        >
          پرفروش‌ترین‌های {collectionFa[product.collection]}
          <FaArrowLeftLong />
        </Link>
      </div>

      <div className="relative py-3">
        <Carousel opts={{ align: "start" }} className="w-full" dir="ltr">
          <div className="absolute -top-13 left-1 mt-2 z-10 flex gap-4">
            <CarouselPrevious className="transition-all duration-200 static w-auto h-auto p-2 border-0 bg-primary-30 text-white hover:text-primary-30 cursor-pointer" />
            <CarouselNext className="transition-all duration-200 static w-auto h-auto p-2 border-0 bg-primary-30 text-white hover:text-primary-30 cursor-pointer" />
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
};

export default DetailRecommendationTemp;
