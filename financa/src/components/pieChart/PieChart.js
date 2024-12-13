import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './PieChart.css'

export default function PieComponent() {
  return (
    <Box flexGrow={1} className='pie_div'>
        <Typography>Despesas por categoria</Typography>
        <PieChart
        series={[
            {
            data: [
                { id: 0, value: 10, label: 'Casa' },
                { id: 1, value: 15, label: 'Alimentação' },
                { id: 2, value: 20, label: 'Lazer' },
            ],
            },
        ]}
        width={400}
        height={200}
        />
    </Box>
  );
}
