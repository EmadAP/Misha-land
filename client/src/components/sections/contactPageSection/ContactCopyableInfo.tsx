import { IoClipboardOutline, IoCopyOutline } from "react-icons/io5";

type CopyableInfoProps = {
  title: string;
  value: string;
  copied: string | null;
  type: "email" | "phone" | "address";
  onCopy: (value: string, type: CopyableInfoProps["type"]) => void;
};

export default function ContactCopyableInfo({
  title,
  value,
  copied,
  type,
  onCopy,
}: CopyableInfoProps) {
  const isCopied = copied === type;
  return (
    <div className="flex flex-col items-start gap-1 relative">
      <h3 className="text-lg">{title}</h3>

      <div className="flex flex-row gap-2 items-start">
        {isCopied ? (
          <IoCopyOutline size={15} className="mb-1" />
        ) : (
          <IoClipboardOutline size={15} className="mb-1" />
        )}
        <button
          onClick={() => onCopy(value, type)}
          className="text-sm text-accent-30 hover:text-accent-20 cursor-pointer text-right"
        >
          {value}
        </button>
      </div>
    </div>
  );
}
