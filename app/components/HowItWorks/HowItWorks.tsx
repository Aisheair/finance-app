import React from 'react';
import './HowItWorks.css';
import image from '../../assets/download.gif';


const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works">
      <h2 data-aos="fade-up" className="how-it-works-title">How It Works</h2>
      <p data-aos="fade-up" data-aos-delay="100" className="how-it-works-subtitle">
        Getting started with F2B is easy and straightforward.
      </p>

      <div className="how-it-works-content">
        <div className="how-it-works-image" data-aos="fade-right">
          <img src={image} alt="Modern Hiarchy" className='ImageIrl' />
        </div>

        <div className="steps" data-aos="fade-left">
          <h3>Three Simple Steps</h3>
          <ol>
            <li>
              <span className="step-number">1</span>
              <div>
                <h4>Sign Up in Seconds</h4>
                <p>Create your account with our quick and simple registration process.</p>
              </div>
            </li>
            <li>
              <span className="step-number">2</span>
              <div>
                <h4>Set Goals</h4>
                <p>Track your goals in real-time</p>
              </div>
            </li>
            <li>
              <span className="step-number">3</span>
              <div>
                <h4>Monitor Progress</h4>
                <p>Watch your progress unfold smoothly.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
