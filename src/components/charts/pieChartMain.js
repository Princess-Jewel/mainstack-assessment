import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const PieChartMain = () => {
  const [topLocation, setTopLocation] = useState([]);
  const [topSource, setTopSource] = useState([]);

  const [countryPercentage, setCountryPercentage] = useState("");
  const [count, setCount] = useState([]);

  function getflags(country) {
    switch (country.toLowerCase()) {
      case "nigeria":
          return ` 🇳🇬 ${country}`
      case "germany":
          return ` 🇩🇪 ${country}`
      case "ghana":
          return ` 🇬🇭 ${country}`
      case "finland":
          return ` 🇫🇮 ${country}`
      case "united kingdom":
          return ` 🇬🇧 ${country}`
      default:
        break;
    }
  }

  useEffect(() => {
   
    const getData = async () => {
      const reqData = await fetch("https://fe-task-api.mainstack.io/");
      const resData = await reqData.json();
      // setTopLocation(resData.top_locations.country);
      // setTopSource(resData.top_locations.source)
      const country_arr = [];
      const count_arr = [];
      resData.top_locations.forEach(element => {
        count_arr.push(element.count)
        return country_arr.push(getflags(element.country)+" "+element.percent+"%")
      });
      setTopLocation(country_arr);
      setCount(count_arr);
      console.log(country_arr, count_arr)
      // console.log(resData.top_locations.);
      // console.log(resData.top_sources);
      // setYAxisData(Object.values(resData.graph_data.views));
      // setXAxisData(
      //   Object.keys(resData.graph_data.views).map(el =>
      //     moment(el).format("Do MMM")
      //   )
      // );
    };
    getData();
  }, []);

  return (
    <div>
      {/* <h2>princess</h2> */}
      <Chart
        type="donut"
        width={350}
        height={550}
        series={count}
        options={{
          labels: topLocation ,
          dataLabels: { enabled: false },
          legend: {
            position: 'left',
            offsetY: 0,
            height: 230,
          }
        }}
      />
    </div>
  );
};

export default PieChartMain;
