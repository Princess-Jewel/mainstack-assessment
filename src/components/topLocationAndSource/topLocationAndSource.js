import React from "react";
import PieChartMain from "../charts/pieChartMain";
import "./topLocationAndSource.css";

const TopLocationAndSource = ({title}) => {
  return (
    <div className="top_location_and_source_main">
      <div className="top_location_and_source_main_header">
        <h2>{title}</h2>
        <p>View full reports</p>
      </div>

      <div className="piechart_and_details">
        <PieChartMain />
      
      </div>
    </div>
  );
};

export default TopLocationAndSource;
