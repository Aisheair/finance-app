import React from "react";
import "./HeroSection.css";
import Image2 from '../../assets/Hero.jpeg'

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            <span className="highlight">Financial</span> Freedom <span className="highlight">Begins</span> Today
          </h1>
          <p>
            Smart financial tracking that helps you take control of your
            expenses and achieve your savings goals.
          </p>
          <div className="hero-buttons">
            <button className="get-started">Get Started</button>
            <button className="learn-more">Learn More</button>
          </div>
        </div>

        <div className="hero-gif-card">
          {/* Replace the src with your actual GIF URL */}
          <img
            src={Image2}
            alt="Finance Demo"
            width={700}
            height={500}
            className="finance-gif"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
