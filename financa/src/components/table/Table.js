import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories };
}

const rows = [
  createData('Aluguel', 159),
  createData('Internet', 237),
  createData('Luz', 262),
  createData('Condomínio', 305),
  createData('Academia', 356),
];

export default function TableComponent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table" id='table_div'>
        <TableHead>
          <TableRow>
            <TableCell align='center' colSpan={2}>Despesas fixas</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell align="center">Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
