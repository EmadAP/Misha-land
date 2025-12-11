import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { clothCollectionData } from "@/lib/mock/dummylists";
import { seasonMap } from "@/lib/types/type";

function ClothCollectionBanner({ season }: { season: string }) {
  const images = clothCollectionData[season];

  if (!images) return null;

  const enSeason = seasonMap[season];

  return (
    <Link to={`/browse?season=${enSeason}&type=clothe`}>
      <div className="relative flex flex-row items-center justify-center gap-2 rounded-md overflow-hidden max-w-screen-xl mx-auto mb-10">
        <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center lg:h-64 lg:w-64 h-40 w-40 rounded-full bg-background-10/30 backdrop-blur-lg z-10" />

        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-2 lg:gap-4 lg:h-52 lg:w-52 h-32 w-32 rounded-full bg-background-10/50 backdrop-blur-lg z-10 text-center">
          <span className="lg:text-xl text-base font-semibold">
            پوشاک مردانه و زنانه {season}
          </span>
          <Button className="lg:px-6 px-4 lg:text-lg rounded-4xl bg-primary-30 hover:bg-primary-30">
            خرید
          </Button>
        </div>

        <div className="relative w-full h-96 bg-accent-30 overflow-hidden rounded-r-md rounded-l-full">
          <img
            src={images.men}
            alt={`${season} men cloth`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="relative w-full h-96 bg-accent-30 overflow-hidden rounded-l-md rounded-r-full">
          <img
            src={images.women}
            alt={`${season} women cloth`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </Link>
  );
}

export default ClothCollectionBanner;
