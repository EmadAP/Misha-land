import TestimonialsAboutSection from "@/components/sections/homePageSection/TestimonialsAboutSection";
import TestimonialsBanner from "@/components/sections/homePageSection/TestimonialsBanner";
import { TestimonialsFaq } from "@/components/sections/homePageSection/TestimonialsFaq";
import MaxWidthWrapper from "@/hooks/MaxWithWrapper";
import React from "react";

function HomeTestimonials() {
  return (
    <div>
      <MaxWidthWrapper className="space-y-20">
        <TestimonialsAboutSection />
        <TestimonialsBanner />
        <TestimonialsFaq />
      </MaxWidthWrapper>
    </div>
  );
}

export default HomeTestimonials;
