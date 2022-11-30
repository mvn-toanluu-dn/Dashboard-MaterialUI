import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const createData = (name, number, percent) => {
  return { name, number, percent };
};
const rows = [
  createData('Social', 260, +35),
  createData('Search Engines', 125, 12),
  createData('Direct', 54, 46),
  createData('Other', 146, 24),
];
const TableDoughnut = () => {
  return (
    <>
      <TableContainer component={Paper} className='table-doughnut'>
        <Table sx={{ minWidth: 315 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Source</TableCell>
              <TableCell align='right'>Renevue</TableCell>
              <TableCell align='right'>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ 'td,th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.number}</TableCell>
                <TableCell className='chart-doughnut-table-percent' align='right'>{row.percent}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableDoughnut;
