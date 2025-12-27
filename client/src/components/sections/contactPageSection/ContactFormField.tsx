import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormFieldProps = {
  label: string;
  id: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
};

export default function ContactFormField({
  label,
  id,
  type = "text",
  placeholder,
}: FormFieldProps) {
  return (
    <label htmlFor={id} className="w-full flex flex-col gap-2">
      <span className="pr-2">{label}</span>

      {type === "textarea" ? (
        <Textarea className="min-h-48" id={id} placeholder={placeholder} />
      ) : (
        <Input id={id} type={type} placeholder={placeholder} />
      )}
    </label>
  );
}
