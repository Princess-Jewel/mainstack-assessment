import React from "react";
import Chart from "react-apexcharts";
import "./topLocation.css";
const TopLocation = ({ title, topLocation, topLocationCount }) => {
  return (
    <div className="top_location_and_source_main">
      <div className="top_location_and_source_main_header">
        <h2>{title}</h2>
        <p>View full reports</p>
      </div>
      <div className="piechart_and_details">
      <Chart
        type="donut"
        width={350}
        height={550}
        series={topLocationCount}
        options={{
          labels: topLocation ,
          dataLabels: { enabled: false },
          legend: {
            position: 'left',
            offsetY: 0,
            height: 230,
            zIndex:1,
          },
          markers: {
            width: 15,
            height: 15,
            strokeWidth: 0,
            strokeColor: 'purple',
            radius: 12,
            offsetX: 8,
            offsetY: 0
        },
        tooltip: {
          enabled: false}
        }}
      />
      </div>
    </div>
  );
};
export default TopLocation;