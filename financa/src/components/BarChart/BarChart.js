import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './BarChart.css'

const uData = [4000 ];
const pData = [2400];
const xLabels = [
  'Ganhos X Gastos',
];

export default function BarComponent() {
  return (
    <BarChart className='barchart_div'
    width={400}
    height={300}
      series={[
        { data: pData, label: 'Gastos', id: 'pvId' },
        { data: uData, label: 'Ganhos', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
  );
}
