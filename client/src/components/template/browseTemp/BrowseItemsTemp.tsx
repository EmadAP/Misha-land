import ProductItemCard from "@/components/sections/ProductItemCard";
import BrowseItemsNav from "@/components/sections/browsePageSection/BrowseItemsNav";
import { useGetAllProducts } from "@/lib/api/client/queries";

function BrowseItemsTemp() {
  const { data: products, isLoading, isError, error } = useGetAllProducts();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (!products) return <div>No products returned</div>;

  return (
    <div className="flex flex-col items-center justify-between gap-6 w-full">
      <BrowseItemsNav />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full  gap-5 ">
        {products.map((product) => (
          <ProductItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BrowseItemsTemp;
