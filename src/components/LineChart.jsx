import React from "react";
import { Line } from "react-chartjs-2";
import * as chartjs from "chart.js";

chartjs.Chart.register(
  chartjs.CategoryScale,
  chartjs.LinearScale,
  chartjs.PointElement,
  chartjs.LineElement,
  chartjs.Title,
  chartjs.Tooltip,
  chartjs.Legend
);

function LineChart(props) {
  return (
    <React.Fragment>
      <Line {...props} />
    </React.Fragment>
  );
}

export default LineChart;
