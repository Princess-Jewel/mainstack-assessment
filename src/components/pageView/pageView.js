import React, { useState } from "react";
import AreaChartMain from "../charts/areaChartMain";
import Tooltip from "../tooltip/tooltip";
import TopLocationAndSource from "../topLocationAndSource/topLocationAndSource";
import "./pageView.css";

const DEFAULT_DATES = [
  { id: 1, value: "1 Day" },
  { id: 2, value: "3 Days" },
  { id: 3, value: "7 Days" },
  { id: 4, value: "30 Days" },
  { id: 5, value: "All Time" },
  { id: 6, value: "Custom Date" },
];

const PageView = () => {
  const [currentDate, setCurrentDate] = useState("All Time");
  const [elements] = useState(DEFAULT_DATES);
  const [selectedID, setSelectedID] = useState(5);

  const handleClick = el => {
    setSelectedID(el.id);
    setCurrentDate(el.value);
  };

  const getSelectedDate = id => (selectedID === id ? "selectedDate" : "");

  return (
    <div className="page_view_main">
      <ul>
        {/* <div id="elements-container"> */}
        {elements.map(el => (
          <li
            key={el.id}
            className={`selectDate ${getSelectedDate(el.id)}`}
            onClick={() => handleClick(el)}
          >
            {el.value}
          </li>
        ))}
        {/* </div> */}
      </ul>

      {/* CHART SECTION*/}
      <div className="chart_main">
        <div className="page_view_and_info_icon">
          <div className="page_view_and_number">
            <h3>Page Views</h3>
            <p className="time">{`${currentDate}`}</p>
            <h2 className="date">500</h2>
          </div>

          <Tooltip content="My tooltip!" direction="bottom" delay="4">
            <div className="info_icon">
              <img
                src="https://res.cloudinary.com/dpqxraalv/image/upload/v1682338242/info_geqwci.svg"
                alt="info icon"
              />
            </div>
          </Tooltip>
        </div>
        {/* CHART */}
        <AreaChartMain />
      </div>

      {/* TOP LOCATION AND SOURCE */}
      <div className="location_and_source">
        <TopLocationAndSource title="Top Locations" />
        <TopLocationAndSource title="Top Referral Source" />
      </div>
    </div>
  );
};

export default PageView;
