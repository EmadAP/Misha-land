import MaxWidthWrapper from "@/hooks/MaxWithWrapper";
import FooterEntry from "../template/footerTemp/FooterEntry";
import FooterInfo from "../template/footerTemp/FooterInfo";
import FooterPages from "../template/footerTemp/FooterPages";

function Footer() {
  return (
    <div className="border-t-2 border-t-accent-30 py-10">
      <MaxWidthWrapper>
        <div className="relative flex flex-col items-center justify-end gap-6">
          <FooterEntry />
        </div>
        <FooterInfo />
        <FooterPages />
      </MaxWidthWrapper>
    </div>
  );
}

export default Footer;
