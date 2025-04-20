import React from "react";
import "./FinancialDashboard.css";
import dashboardImage from "../../assets/Line Graph {gif}.jpeg"; // rename your image to dashboardImage.jpg or change the path accordingly

const FinancialDashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-left">
          <h2>
            Take Control of Your <span className="highlight">Financial Future</span>
          </h2>
          <p className="description">
            Our platform provides all the tools you need to manage your finances effectively and reach your savings goals faster.
          </p>
          <ul className="features">
            <li>✔ Smart categorization of recurring expenses</li>
            <li>✔ Automated weekly and monthly reports</li>
            <li>✔ Intelligent savings recommendations</li>
          </ul>
          <button className="start-button">Start Saving Today</button>
        </div>
        <div className="dashboard-right">
          <img src={dashboardImage} alt="Dashboard View" className="dashboard-image" />
          <div className="image-caption">
            <span className="caption-title">DASHBOARD VIEW</span>
            <br />
            <span className="caption-subtitle">Your financial insights at a glance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;
