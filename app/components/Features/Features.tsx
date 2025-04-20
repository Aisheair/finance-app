import React, { useEffect } from 'react';
import './Features.css';
import { FaWallet, FaChartBar, FaClipboardList, FaBullseye, FaBell, FaLock } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';


const features = [
  {
    icon: <FaWallet />,
    title: 'Expense Tracking',
    description: 'Easily log and categorize your daily expenses with our intuitive interface.',
  },
  {
    icon: <FaChartBar />,
    title: 'Budget Planning',
    description: 'Set monthly and weekly budgets with custom categories to meet your financial goals.',
  },
  {
    icon: <FaClipboardList />,
    title: 'Spending Analytics',
    description: 'Visualize your spending habits with detailed charts and customizable reports.',
  },
  {
    icon: <FaBullseye />,
    title: 'Savings Goals',
    description: 'Create personalized savings targets and track your progress towards financial freedom.',
  },
  {
    icon: <FaBell />,
    title: 'Bill Reminders',
    description: 'Never miss a payment with automated alerts and due date notifications.',
  },
  {
    icon: <FaLock />,
    title: 'Secure Data',
    description: 'Your financial information is protected with bank-level encryption and security.',
  },
];

const Features: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="features-section" id="about">
      <h2 className="features-title">Features</h2>
      <p className="features-subtitle">
        We help you track expenses and meet your monthly and weekly savings goals.
      </p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" data-aos="fade-up" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
