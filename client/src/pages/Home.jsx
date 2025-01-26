import React from "react";
import HeroSection from "../sections/HeroSection";
import ServiceSection from "../sections/ServiceSection";
import ExpertiseSection from "../sections/ExpertiseSection";
import ChooseSection from "../sections/ChooseSection";
import ClientsSection from "../sections/ClientsSection";
import FrequentlyAskedSection from "../sections/FrequentlyAskedSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <ExpertiseSection />
      <ChooseSection />
      <ClientsSection />
      <FrequentlyAskedSection />
    </>
  );
};

export default Home;
