import type { ReactNode } from "react";

type OtherPagesInfoSectionProps = {
  title: string;
  description?: string;
  items?: string[];
  children?: ReactNode;
};

export default function OtherPagesInfoSection({
  title,
  description,
  items,
  children,
}: OtherPagesInfoSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">{title}</h3>

      {description && <p className="text-sm leading-7">{description}</p>}

      {items && (
        <ul className="list-disc list-inside space-y-2">
          {items.map((item, index) => (
            <li key={index} className="text-sm leading-7">
              {item}
            </li>
          ))}
        </ul>
      )}

      {children}
    </div>
  );
}
