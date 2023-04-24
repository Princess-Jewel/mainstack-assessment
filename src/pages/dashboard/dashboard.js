import moment from "moment";
import React, { useEffect, useState } from "react";
import PageView from "../../components/pageView/pageView";
import "./dashboard.css";

const Dashboard = () => {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    function greetingFunction() {
      const hour = moment().hour();

      if (hour > 16) {
        return "Good evening";
      }

      if (hour > 11) {
        return "Good afternoon";
      }

      return "Good morning";
    }

    setGreeting(greetingFunction());
  }, []);

  return (
    <div className="dashboard_main">
      <h3 className="dashboard_heading">Dashboard</h3>

      <div className="sub_navbar">
        <div className="welcome_text">
          <h2>{`${greeting}, Blessing ⛅️`}</h2>
          <p>Check out your dashboard summary.</p>
        </div>
        <p className="analytics">View analytics</p>
      </div>

      <PageView />
    </div>
  );
};

export default Dashboard;
