import moment from "moment";
import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const AreaChartMain = () => {
  const [xAxisData, setXAxisData] = useState([]);
  const [yAxisData, setYAxisData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const reqData = await fetch("https://fe-task-api.mainstack.io/");
      const resData = await reqData.json();
      setYAxisData(Object.values(resData.graph_data.views));
      setXAxisData(
        Object.keys(resData.graph_data.views).map(el =>
          moment(el).format("Do MMM")
        )
      );
    };
    getData();
  }, []);

  return (
    <div>
      <Chart
        type="area"
        width="100%"
        height={576}
        series={[
          {
            name: "views",
            data: yAxisData,
          },
        ]}
        options={{
          dataLabels: { enabled: false },
          colors: ["#FF5403"],
          stroke: { width: 2, curve: "straight" },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.3,
              opacityTo: 0.9,
              stops: [0, 100],
            },
          },
          xaxis: {
            categories: xAxisData,
          },
          chart: {
            toolbar: {
              show: false,
            },
          },
        }}
      />
    </div>
  );
};

export default AreaChartMain;
