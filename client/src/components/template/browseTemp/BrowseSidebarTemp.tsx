import SidebarItemsSection from "@/components/sections/browsePageSection/SidebarItemsSection";
import { Button } from "@/components/ui/button";

function BrowseSidebarTemp() {
  return (
    <div className="shadow-xl w-full h-fit rounded-md py-8 px-4 flex flex-col gap-4 items-start ">
      <h3 className="text-lg font-semibold">فیلتر ها :</h3>
      <SidebarItemsSection />
      <Button className="w-full bg-primary-30 hover:bg-primary-20">
        حذف فیلتر ها
      </Button>
    </div>
  );
}

export default BrowseSidebarTemp;
