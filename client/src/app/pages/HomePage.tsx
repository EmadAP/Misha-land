import React from "react";
import HomeSeasonCollections from "@/components/template/HomePageTemp/HomeSeasonCollections";
import HomeLandingBanner from "@/components/template/HomePageTemp/HomeLandingBanner";
import HomeTestimonials from "@/components/template/HomePageTemp/HomeTestimonials";

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
