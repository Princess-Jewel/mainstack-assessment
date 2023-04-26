import React from "react";
import Chart from "react-apexcharts";
import "../topLocation/topLocation.css";

const TopSource = ({ title, topSource, topSourceCount }) => {
  return (
    <div className="top_location_and_source_main">
      <div className="top_location_and_source_main_header">
        <h2>{title}</h2>
        <p>View full reports</p>
      </div>

      <div className="piechart_and_details">
      <Chart
        type="donut"
        width={400}
        height={550}
        series={topSourceCount}
        options={{
          labels: topSource ,
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
          enabled: true
        },
        responsive: [
          {
            breakpoint: 768,
            options: {
              chart: {
                width: 280,
              },
           
            }
          }
        ]
        }}
        
      />
      </div>
    </div>
  );
};

export default TopSource;
