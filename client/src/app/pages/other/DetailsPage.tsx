import DetailImgTemp from "@/components/template/detailsTemp/DetailImgTemp";
import DetailInfoTemp from "@/components/template/detailsTemp/DetailInfoTemp";
import DetailRecommendationTemp from "@/components/template/detailsTemp/DetailRecommendationTemp";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";
import { useGetProductByCollectionAndId } from "@/lib/api/client/queries";
import type { CollectionType } from "@/lib/types/type";

import { useParams } from "react-router-dom";

function DetailsPage() {
  const { collection, id } = useParams<{
    collection: CollectionType;
    id: string;
  }>();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetProductByCollectionAndId(collection, id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="py-28">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col-reverse md:flex-row justify-between gap-10 md:gap-6 xl:gap-10">
            <DetailInfoTemp product={product} />
            <DetailImgTemp product={product} />
          </div>
          <DetailRecommendationTemp product={product} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default DetailsPage;
