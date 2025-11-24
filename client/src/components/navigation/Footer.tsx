import MaxWidthWrapper from "@/hooks/MaxWithWrapper";
import React from "react";
import FooterEntry from "../template/FooterTemp/FooterEntry";
import FooterInfo from "../template/FooterTemp/FooterInfo";
import FooterPages from "../template/FooterTemp/FooterPages";

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
