import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";

interface SeasonCardProps {
  image: string;
  title: string;
  href: string;
}

export default function CollectionCard({
  image,
  title,
  href,
}: SeasonCardProps) {
  return (
    <div className="group relative w-full min-h-96 rounded-md">
      {/* Image + Overlay */}
      <div className=" relative w-full min-h-96 overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition duration-300"
        />

        <a
          href={href}
          className="absolute inset-0 items-end flex flex-col justify-end p-6 
                     transition duration-300 text-background-10 font-semibold 
                     text-2xl pb-10 no-underline rounded-md"
        />
      </div>

      {/* Circle Button */}
      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2
                      flex flex-col justify-center items-center h-20 w-20 
                      rounded-full border-2 border-primary-30 bg-background-10 
                      group-hover:bg-primary-30 transition duration-200 
                      group-hover:text-background-10 z-10 text-center pt-4 px-1 cursor-pointer"
      >
        <span>{title}</span>
        <TiArrowSortedDown size={50} className="text-background-10" />
      </div>
    </div>
  );
}
