import React from "react";
import springBannerImg from "@/assets/banner/landing/springCollectionBanner.jpg";
import summerBannerImg from "@/assets/banner/landing/summerCollectionBanner.jpg";
import fallBannerImg from "@/assets/banner/landing/fallCollectionBanner.jpg";
import winterBannerImg from "@/assets/banner/landing/winterCollectionBanner.jpg";
import CollectionCard from "@/components/sections/HomePageSection/CollectionCard";
import { IconMP } from "@/components/ui/IconMP";
import { SeasonCollectionsCarousel } from "@/components/sections/HomePageSection/SeasonCollectionsCarousel";
import AccessoriesCollectionBanner from "@/components/sections/HomePageSection/AccessoriesCollectionBanner";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";
import ClothCollectionBanner from "@/components/sections/HomePageSection/ClothCollectionBanner";

function HomeSeasonCollections() {
  const seasonCollection = [
    { image: springBannerImg, title: "کالکشن بهاری", href: "#" },
    { image: summerBannerImg, title: "کالکشن تابستانی", href: "#" },
    { image: fallBannerImg, title: "کالکشن پاییزی", href: "#" },
    { image: winterBannerImg, title: "کالکشن زمستانی", href: "#" },
  ];
  return (
    <div className="py-20 ">
      <MaxWidthWrapper className="space-y-10">
        <h1 className="text-4xl font-bold text-center">
          خرید آنلاین لباس مناسب هر فصل
        </h1>
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 
                      justify-between gap-x-6 gap-y-14 items-center"
        >
          {seasonCollection.map((s, i) => (
            <CollectionCard
              key={i}
              image={s.image}
              title={s.title}
              href={s.href}
            />
          ))}
        </div>
        <div className="pt-16 space-y-10">
          <h2 className="text-2xl font-semibold text-center text-shadow-lg tracking-tight text-balance leading-tight!">
            <span className="relative px-2">
              لباس و اکسسوری های پاییزی مردانه و زنانه
              <IconMP.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-5  text-accent-30" />
            </span>
          </h2>
          <SeasonCollectionsCarousel />
          <AccessoriesCollectionBanner />
          <SeasonCollectionsCarousel />
          <ClothCollectionBanner />
          <SeasonCollectionsCarousel />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default HomeSeasonCollections;
