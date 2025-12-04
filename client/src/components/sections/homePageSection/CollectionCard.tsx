import { TiArrowSortedDown } from "react-icons/ti";

interface SeasonCardProps {
  image: string;
  title: string;
}

export default function CollectionCard({ image, title }: SeasonCardProps) {
  return (
    <button className="relative w-full min-h-96 rounded-md border-2 border-transparent hover:border-primary-30 ">
      {/* Image + Overlay */}
      <div className="relative w-full min-h-96 overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover "
        />
      </div>

      {/* Circle Button */}
      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2
                      flex flex-col justify-center items-center h-20 w-20 
                      rounded-full border-2 border-primary-30 bg-background-10 
                      group-hover:bg-primary-30 group-hover:text-background-10
                       z-10 text-center pt-4 px-1 cursor-pointer "
      >
        <span>{title}</span>
        <TiArrowSortedDown size={50} className="text-background-10" />
      </div>
    </button>
  );
}
