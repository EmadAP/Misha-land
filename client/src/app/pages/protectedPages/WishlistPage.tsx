import ProductItemCard from "@/components/sections/ProductItemCard";
import { ProductDummyData } from "@/lib/mock/dummylists";
import React from "react";

function WishlistPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10">
      {ProductDummyData.map((item) => (
        <ProductItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export default WishlistPage;
