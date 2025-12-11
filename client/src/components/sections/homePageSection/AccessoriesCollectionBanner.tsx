import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { accessoriesData } from "@/lib/mock/dummylists";
import { seasonMap } from "@/lib/types/type";

function AccessoriesCollectionBanner({ season }: { season: string }) {
  const items = accessoriesData[season] || [];

  const labelsSentence = items
    .map((item) => item.label)
    .slice(0, 4)
    .join("، ")
    .replace(/،([^،]*)$/, " و$1");

  const enSeason = seasonMap[season];

  return (
    <Link to={`/browse?season=${enSeason}&type=accessories`}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-6 gap-x-28 max-w-screen-xl mx-auto mb-10">
        <div className="flex flex-col gap-2 items-start md:w-full lg:w-fit">
          <h2 className="text-xl font-semibold">اکسسوری‌ های {season}</h2>

          <span className="text-lg">{labelsSentence} زنانه و مردانه</span>

          <Button className="px-6 text-lg rounded-4xl bg-primary-30 hover:bg-primary-30">
            خرید
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-between md:w-full text-center">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="relative w-32 h-32 bg-primary-10 overflow-hidden rounded-full mx-auto">
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default AccessoriesCollectionBanner;
