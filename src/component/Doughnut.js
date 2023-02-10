import React from 'react';
import DonutChart from 'react-donut-chart';

function Doughnut() {
  return (
    <DonutChart
  data={[
    {
      label: 'Remaining',
      value: 25,
    },
    {
      label: 'spent',
      value: 75,
      
    },
  ]}
/>
  )
}

export default Doughnut