import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../util/Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    1,
    '1BM21EC231',
    'Alfiya Kouser A',
    'alfiya.ec21@bmsce.ac.in',
    '123',
    '3-Mar-2024',
  ),
  createData(
    2,
    '1BM21EC4565',
    'Sowmya',
    'sowmya.ec21@bmsce.ac.in',
    '124',
    '2-Mar-2024',
  ),
  createData(
    3,
    '1BM21EC98',
    'Kouser',
    'kouser.ec21@bmsce.ac.in',
    '126',
    '4-Mar-2024',
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Registered Students</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>USN</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Biometric ID</TableCell>
            <TableCell>Registration Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}