import { Outlet } from "react-router";
import MouseFollower from "./components/Mouse/ MouseFollower";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import FinancialDashboard from "./components/FinancialDashboard/FinancialDashboard";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/Hero/HeroSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import InfoCards from "./components/InfoCards/InfoCards";
import Navbar from "./components/navbar/navbar";
import React from "react";

const App = () => {
  return (
    <div className="Main">
      
      
      <HeroSection></HeroSection>
      <InfoCards></InfoCards>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <FinancialDashboard></FinancialDashboard>
      <Contact></Contact>
      
    </div>
  );
};

export default App;
