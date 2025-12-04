import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import menBannerImg from "@/assets/banner/landing/menMainBanner2.jpg";

function AccessoriesCollectionBanner({ season }: { season: string }) {
  return (
    <Link to="#">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6 gap-x-28 max-w-screen-xl mx-auto mb-10">
        <div className="flex flex-col gap-2 items-start md:w-full lg:w-fit">
          <h2 className="text-xl font-semibold">اکسستوری های {season}</h2>
          <span className="text-lg">
            دستکش, چتر, کلاه و شالگردن زنانه و مردانه
          </span>
          <Button className="px-6 text-lg rounded-4xl bg-primary-30 hover:bg-primary-30">
            خرید
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-between  md:w-full">
          <div className="relative w-32 h-32 overflow-hidden rounded-full mx-auto">
            <img
              src={menBannerImg}
              alt="men banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative w-32 h-32 overflow-hidden rounded-full mx-auto">
            <img
              src={menBannerImg}
              alt="men banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative w-32 h-32 overflow-hidden rounded-full mx-auto">
            <img
              src={menBannerImg}
              alt="men banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="relative w-32 h-32 overflow-hidden rounded-full mx-auto">
            <img
              src={menBannerImg}
              alt="men banner"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default AccessoriesCollectionBanner;
