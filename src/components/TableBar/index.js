import { Card, CardHeader, Chip, Grid, IconButton } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const createData = (name, startdate, enddate, state, assignee) => {
  return { name, startdate, enddate, state, assignee };
};
const rows = [
  createData(
    'Project Aurora',
    '01/01/2021',
    '31/06/2021',
    'Done',
    'James Dalton'
  ),
  createData(
    'Project Eagle',
    '01/01/2021',
    '31/06/2021',
    'In Progress',
    'Tracy Mack'
  ),
  createData(
    'Project Fireball',
    '01/01/2021',
    '31/06/2021',
    'Done',
    'Sallie Love'
  ),
  createData(
    'Project Omega',
    '01/01/2021',
    '31/06/2021',
    'Cancelled',
    '	Glenda Jang'
  ),
  createData(
    'Project Yoda',
    '01/01/2021',
    '31/06/2021',
    'Done',
    '	Raymond Ennis'
  ),
  createData(
    'Project Zulu',
    '01/01/2021',
    '31/06/2021',
    'Done',
    'Matthew Winters'
  ),
];
const TableBar = () => {
  return (
    <Grid className='table-chart-bar' item lg={8.24}>
      <Card elevation={0} className='table-chart-bar-card'>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <CardHeader
            className='table-chart-bar-card-header'
            color='#f3983e'
            title='Latest projects'
            variant='h6'
          ></CardHeader>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Grid>
        <Grid className='table-bar-all'>
          <TableContainer component={Paper} className='table-bar'>
            <Table sx={{ minWidth: 315 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Start Date</TableCell>
                  <TableCell>End Date</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Assignee</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} sx={{ 'td,th': { border: 0 } }}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell>{row.startdate}</TableCell>
                    <TableCell>{row.enddate}</TableCell>
                    <TableCell>
                      <Chip
                        className='table-bar-chip'
                        size='medium'
                        label={row.state}
                        color={
                          row.state === 'Done'
                            ? 'success'
                            : row.state === 'In Progress'
                            ? 'warning'
                            : 'error'
                        }
                      />
                    </TableCell>
                    <TableCell>{row.assignee}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Card>
    </Grid>
  );
};

export default TableBar;
