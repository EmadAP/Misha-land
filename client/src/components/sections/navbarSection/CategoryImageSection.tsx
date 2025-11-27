interface CategoryImageSectionProps {
  image: string;
}

export default function CategoryImageSection({
  image,
}: CategoryImageSectionProps) {
  return (
    <div className="bg-accent-10 relative w-1/2 h-[600px] rounded-md overflow-hidden">
      <img
        src={image}
        alt="category"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <a
        href="#"
        className="absolute inset-0 flex flex-col justify-end p-6 text-accent-30 no-underline rounded-md"
      />
    </div>
  );
}
