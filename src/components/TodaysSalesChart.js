import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

const TodaysSalesChart = ({ salesData }) => {
  const today = new Date();
  const currentHour = today.getHours();
  
  // Filter today's sales based on the current hour
  const todaySales = salesData.slice(currentHour, currentHour + 1);

  const todayHours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const dataLine = {
    labels: todayHours,
    datasets: [
      {
        label: 'Today Sales',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(82, 178, 2, 0.8)',
        borderWidth: 1,
        pointBorderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: salesData,
      },
    ],
  };

  const optionsLine = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
          stepSize: 100,
          callback: function (value) {
            return new Intl.NumberFormat('en-US').format(value);
          },
        },
        title: {
          display: true,
          text: 'Amount',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Hours',
        },
        ticks: {
          stepSize: 6, // Divide the 24 hours into 6 intervals for x-axis
        },
      },
    },
  };


  return (
    <div>
      <div style={{ height: '400px', marginBottom: '20px' }}>
        <Line data={dataLine} options={optionsLine} />
      </div>
      
    </div>
  );
};

export default TodaysSalesChart;
