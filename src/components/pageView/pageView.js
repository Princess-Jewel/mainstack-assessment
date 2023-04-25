import React, { useEffect, useState } from "react";
import AreaChartMain from "../charts/areaChartMain";
import Tooltip from "../tooltip/tooltip";
import TopLocation from "../topLocation/topLocation";
import TopSource from "../topSource/topSource";
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
  const [topLocation, setTopLocation] = useState([]);
  const [topLocationCount, setTopLocationCount] = useState([]);
  const [topSource, setTopSource] = useState([]);
  const [topSourceCount, setTopSourceCount] = useState([]);

  function getflags(country) {
    switch (country.toLowerCase()) {
      case "nigeria":
        return ` 🇳🇬 ${country}`;
      case "germany":
        return ` 🇩🇪 ${country}`;
      case "ghana":
        return ` 🇬🇭 ${country}`;
      case "finland":
        return ` 🇫🇮 ${country}`;
      case "united kingdom":
        return ` 🇬🇧 ${country}`;
      default:
        break;
    }
  }

  useEffect(() => {
    const getData = async () => {
      const reqData = await fetch("https://fe-task-api.mainstack.io/");
      const resData = await reqData.json();
      const topLocationCountry_arr = [];
      const topLocationCount_arr = [];
      const topSource_arr = [];
      const topSourceCount_arr = [];
      resData.top_locations.forEach(element => {
        topLocationCount_arr.push(element.count);
        return topLocationCountry_arr.push(
          getflags(element.country) + " " + element.percent + "%"
        );
      });
      resData.top_sources.forEach(element => {
        topSourceCount_arr.push(element.count);
        return topSource_arr.push(element.source + " " + element.percent + "%");
      });
      setTopLocation(topLocationCountry_arr);
      setTopLocationCount(topLocationCount_arr);
      setTopSource(topSource_arr);
      setTopSourceCount(topSourceCount_arr);
    };
    getData();
  }, []);

  const handleClick = el => {
    setSelectedID(el.id);
    setCurrentDate(el.value);
  };

  const getSelectedDate = id => (selectedID === id ? "selectedDate" : "");

  return (
    <div className="page_view_main">
      <ul>
        {elements.map(el => (
          <li
            key={el.id}
            className={`selectDate ${getSelectedDate(el.id)}`}
            onClick={() => handleClick(el)}
          >
            {el.value}
          </li>
        ))}
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
        <TopLocation
          title="Top Locations"
          topLocation={topLocation}
          topLocationCount={topLocationCount}
        />
        <TopSource
          title="Top Referral Source"
          topSource={topSource}
          topSourceCount={topSourceCount}
        />
      </div>
    </div>
  );
};

export default PageView;
