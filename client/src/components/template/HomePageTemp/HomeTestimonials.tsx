import TestimonialsAboutSection from "@/components/sections/HomePageSection/TestimonialsAboutSection";
import TestimonialsBanner from "@/components/sections/HomePageSection/TestimonialsBanner";
import { TestimonialsFaq } from "@/components/sections/HomePageSection/TestimonialsFaq";
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
