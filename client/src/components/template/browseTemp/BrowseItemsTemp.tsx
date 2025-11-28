import ProductItemCard from "@/components/sections/ProductItemCard";
import BrowseItemsNav from "@/components/sections/browseGapeSection/BrowseItemsNav";
import { ProductDummyData } from "@/lib/mock/dummylists";
import React from "react";

function BrowseItemsTemp() {
  return (
    <div className="flex flex-col items-center justify-between gap-6">
      <BrowseItemsNav />
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 lg:gap-10">
        {ProductDummyData.map((item) => (
          <ProductItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default BrowseItemsTemp;
