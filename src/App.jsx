import React from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import CallWsService from "./services/CallWs";

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      min: 0,
      suggestedMax: 100,
    },
  },
};

function App() {
  const [labels, setLabels] = React.useState([]);
  const [datasets, setDatasets] = React.useState([
    {
      label: "IDLE",
      data: [],
    },
  ]);
  const [request, setRequest] = React.useState({ state: "", time: "" });
  const [optionCharts, setOptionCharts] = React.useState({});

  const callWsCheckPool = async (request) => {
    const service = new CallWsService();
    await service.postCheckPool(request).then(({ data }) => {
      console.log(data);
    });
  };

  React.useEffect(() => {
    callWsCheckPool(request);
    // setInterval(() => {}, 5000);
    return () => {};
  }, [request]);

  return (
    <div className="flex-col justify-center w-full">
      <div className="header-dashboard w-full text-center">
        <h1>Dashboard - DB</h1>
      </div>
      <hr />
      <div className="body-dashboard w-full p-5">
        <LineChart options={options} data={{ labels, datasets }} />
      </div>
    </div>
  );
}

export default App;
