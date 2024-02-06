import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import TodaysSalesChart from './TodaysSalesChart'; 
import YearlySalesPieChart from './YearlySalesPieChart';
import { Grid } from '@mui/material';
import Dashboard from '../screens/dashboard';


const SalesChart = () => {
  const [today] = useState(new Date()); // Get today's date

  const salesData = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100) * 1000);

  const days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - i); // Adjust days based on today's date
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  });

  const todaySales = salesData.find((_, index) => {
    const date = new Date();
    date.setDate(today.getDate());
    return index === date.getHours();
  });



  const data = {
    labels: days.reverse(), // Reverse days array to match sales data
    datasets: [
      {
        label: 'Sales',
        backgroundColor: days.map((date) =>
          new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) ===
          today.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
          ? 'rgba(82, 178, 2, 0.8)' // Highlight today's sales in green
          : 'rgba(54, 162, 235, 0.5)'
        ),
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: salesData.reverse(), // Reverse sales data to match days array
      },
    ],
  };

  

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          values: [100, 500, 1000, 5000, 10000, 25000, 50000, 100000, 250000, 500000, 750000, 1000000],
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
          text: 'Days',
        },
      },
    },
  };

  const totalSales = salesData.reduce((acc, curr) => acc + curr, 0);

  // Ensure both totalSales and days.length are valid values
  const averageSales = days.length !== 0 ? totalSales / days.length : 0;

  return (
    <div style={{ height: '400px' }}>
      <Bar data={data} options={options} />
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TodaysSalesChart todaySales={todaySales || 0} salesData={salesData} />
      </Grid>
      <Grid item xs={12} md={6}>
        <YearlySalesPieChart/>

      </Grid>
    </Grid>
    </div>
    
  );
};

export default SalesChart;
