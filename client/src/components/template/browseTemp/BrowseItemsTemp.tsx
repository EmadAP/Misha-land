import ProductItemCard from "@/components/sections/ProductItemCard";
import BrowseItemsNav from "@/components/sections/browsePageSection/BrowseItemsNav";
import { ProductDummyData } from "@/lib/mock/dummylists";
import React from "react";

function BrowseItemsTemp() {
  return (
    <div className="flex flex-col items-center justify-between gap-6 w-full">
      <BrowseItemsNav />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 ">
        {ProductDummyData.map((item) => (
          <ProductItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default BrowseItemsTemp;
