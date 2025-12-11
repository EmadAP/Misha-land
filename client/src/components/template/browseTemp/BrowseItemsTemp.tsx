import ProductItemCard from "@/components/sections/ProductItemCard";
import BrowseItemsNav from "@/components/sections/browsePageSection/BrowseItemsNav";
import {
  useGetAllCategories,
  useGetAllProducts,
} from "@/lib/api/client/queries";
import { useSearchParams } from "react-router-dom";

function BrowseItemsTemp() {
  const { data: products, isLoading, isError, error } = useGetAllProducts();
  const { data: allCategories } = useGetAllCategories();

  const [searchParams] = useSearchParams();

  const genderFilter = searchParams.get("gender");
  const seasonFilter = searchParams.get("season");
  const typeFilter = searchParams.get("type");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (!allCategories || !products) return <div>No products returned</div>;

  let filtered = products;

  if (genderFilter === "men") {
    filtered = filtered.filter((p) => p.collection === "men-clothing");
  } else if (genderFilter === "women") {
    filtered = filtered.filter((p) => p.collection === "women-clothing");
  }

  if (seasonFilter) {
    filtered = filtered.filter((p) =>
      p.categories.some((cat) => {
        const categoryObj =
          typeof cat === "string"
            ? allCategories?.find((c) => c.id === cat)
            : cat;

        return categoryObj?.season === seasonFilter;
      })
    );
  }

  if (typeFilter === "clothe") {
    filtered = filtered.filter(
      (p) =>
        p.collection === "men-clothing" || p.collection === "women-clothing"
    );
  }

  if (typeFilter === "accessories") {
    filtered = filtered.filter((p) => p.collection === "accessories");
  }

  if (typeFilter === "onSale") {
    filtered = filtered.filter((p) => p.onSale === true);
  }

  return (
    <div className="flex flex-col items-center justify-between gap-6 w-full">
      <BrowseItemsNav />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full  gap-5 ">
        {filtered.map((product) => (
          <ProductItemCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BrowseItemsTemp;
