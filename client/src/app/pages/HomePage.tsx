import React from "react";
import HomeSeasonCollections from "@/components/template/homePageTemp/HomeSeasonCollections";
import HomeLandingBanner from "@/components/template/homePageTemp/HomeLandingBanner";
import HomeTestimonials from "@/components/template/homePageTemp/HomeTestimonials";

function HomePage() {
  return (
    <div className="py-16">
      <HomeLandingBanner />
      <HomeSeasonCollections />
      <HomeTestimonials />
    </div>
  );
}

export default HomePage;
