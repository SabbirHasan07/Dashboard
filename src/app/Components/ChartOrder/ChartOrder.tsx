import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from 'chart.js';
import { BarChart } from '@/app/icons/icons';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    datasets: [
      {
        label: 'Activity Status',
        data: [43, 37, 23], 
        backgroundColor: ['green', 'orange', 'red'], 
        borderColor: 'white',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '50%', 
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<'pie'>) => {
            const label = context.label || '';
            const value = context.raw as number || 0;
            return `${label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className="lg:flex gap-4 items-center m-4">
      <div style={{ width: '150px', height: '180px' }}>
        <Pie data={data} options={options} />
      </div>
      <div>
        <BarChart />
      </div>
    </div>
  );
};

export default PieChart;
