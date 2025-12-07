import springBannerImg from "@/assets/banner/landing/springCollectionBanner.jpg";
import summerBannerImg from "@/assets/banner/landing/summerCollectionBanner.jpg";
import fallBannerImg from "@/assets/banner/landing/fallCollectionBanner.jpg";
import winterBannerImg from "@/assets/banner/landing/winterCollectionBanner.jpg";
import CollectionCard from "@/components/sections/homePageSection/CollectionCard";
import { IconMP } from "@/components/ui/IconMP";
import { CollectionsCarousel } from "@/components/sections/homePageSection/CollectionsCarousel";
import AccessoriesCollectionBanner from "@/components/sections/homePageSection/AccessoriesCollectionBanner";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";
import ClothCollectionBanner from "@/components/sections/homePageSection/ClothCollectionBanner";
import { useState } from "react";
import {
  useGetAllCategories,
  useGetProductsByCategory,
} from "@/lib/api/client/queries";

function HomeSeasonCollections() {
  const [selectedSeason, setSelectedSeason] = useState("پاییزی");

  const seasonMap: Record<string, string> = {
    بهاری: "spring",
    تابستانی: "summer",
    پاییزی: "fall",
    زمستانی: "winter",
  };

  const { data: allCategories } = useGetAllCategories();
  const categorySlug = seasonMap[selectedSeason];

  const categoryId =
    allCategories?.find((cat) => cat.slug === categorySlug)?.id || undefined;

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetProductsByCategory(categoryId);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (!products) return <div>No products returned</div>;

  const menAndWomen = products.filter(
    (p) => p.collection === "men-clothing" || p.collection === "women-clothing"
  );

  const accessories = products.filter((p) => p.collection === "accessories");

  const allSeasonProducts = products;

  const seasonCollection = [
    { image: springBannerImg, title: "بهاری" },
    { image: summerBannerImg, title: "تابستانی" },
    { image: fallBannerImg, title: "پاییزی" },
    { image: winterBannerImg, title: "زمستانی" },
  ];
  return (
    <div className="py-20 ">
      <MaxWidthWrapper className="space-y-10">
        <h1 className="text-4xl font-bold text-center">
          خرید آنلاین لباس مناسب هر فصل
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-x-6 gap-y-14 items-center">
          {seasonCollection.map((s, i) => (
            <CollectionCard
              key={i}
              image={s.image}
              title={s.title}
              season={selectedSeason}
              onClick={() => setSelectedSeason(s.title)}
            />
          ))}
        </div>
        <div className="pt-16 space-y-10">
          <h2 className="text-2xl font-semibold text-center text-shadow-lg tracking-tight text-balance leading-tight!">
            <span className="relative px-2">
              لباس و اکسسوری های {selectedSeason} مردانه و زنانه
              <IconMP.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-5  text-accent-30" />
            </span>
          </h2>
          <CollectionsCarousel season={selectedSeason} products={menAndWomen} />
          <AccessoriesCollectionBanner season={selectedSeason} />
          <CollectionsCarousel season={selectedSeason} products={accessories} />
          <ClothCollectionBanner season={selectedSeason} />
          <CollectionsCarousel
            season={selectedSeason}
            products={allSeasonProducts}
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default HomeSeasonCollections;
