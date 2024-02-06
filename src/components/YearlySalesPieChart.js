import { Pie } from "react-chartjs-2";
import React from "react";

function YearlySalesPieChart() {
  const labels = ["Q1", "Q2", "Q3", "Q4"];
  const datasets = [
    {
      data: [2000, 4000, 2300, 2222],
      backgroundColor: ["#003f5c", "#58508d", "#bc5090", "#ff6361"],
    },
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 5,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  return (
    <Pie
      options={options}
      data={{
        labels: labels,
        datasets: datasets,
      }}
    />
  );
}

export default YearlySalesPieChart;
