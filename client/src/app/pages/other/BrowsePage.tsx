import BrowseItemsTemp from "@/components/template/browseTemp/BrowseItemsTemp";
import BrowseSidebarTemp from "@/components/template/browseTemp/BrowseSidebarTemp";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";
import React from "react";

function BrowsePage() {
  return (
    <div className="py-38">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5 lg:gap-10">
          <div className="hidden lg:flex lg:col-span-1">
            <BrowseSidebarTemp />
          </div>
          <div className="col-span-1 md:col-span-2">
            <BrowseItemsTemp />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default BrowsePage;
