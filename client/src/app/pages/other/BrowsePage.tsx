import BrowseItemsTemp from "@/components/template/browseTemp/BrowseItemsTemp";
import BrowseSidebarTemp from "@/components/template/browseTemp/BrowseSidebarTemp";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";

function BrowsePage() {
  return (
    <div className="py-38">
      <MaxWidthWrapper>
        <div className="flex flex-row justify-between gap-5 lg:gap-10">
          <div className="hidden md:block min-w-64">
            <div className="sticky top-24">
              <BrowseSidebarTemp />
            </div>
          </div>
          <BrowseItemsTemp />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default BrowsePage;
