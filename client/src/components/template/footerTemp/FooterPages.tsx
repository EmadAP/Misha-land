import { footerPages } from "@/lib/mock/dummylists";
import { Link } from "react-router-dom";

function FooterPages() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-between gap-6">
      {footerPages.map((page) => (
        <Link
          to={page.href}
          className="mx-auto text-sm hover:underline hover:text-accent-30"
        >
          {page.label}
        </Link>
      ))}
    </div>
  );
}

export default FooterPages;
