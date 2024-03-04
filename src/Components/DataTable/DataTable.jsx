import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../util/Title';


const DataTable = ({ tableTitle, tableHeader, tableRows } ) => {
  console.log("tableHeader " + JSON.stringify(tableRows))
  return (
    <React.Fragment>
      <Title>{tableTitle}</Title>
      <Table size="small">
        <TableHead>
              <TableCell>{tableHeader.usn}</TableCell> {/* Date */}
              <TableCell>{tableHeader.name}</TableCell> {/* Name */}
              <TableCell>{tableHeader.email}</TableCell> {/* Ship To */}
              <TableCell>{tableHeader.bioId}</TableCell> {/* Payment Method */}
              <TableCell>{tableHeader.regDate}</TableCell> {/* Sale Amount */}
        </TableHead>
        <TableBody>
          {tableRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.usn}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.biometricId}</TableCell>
              <TableCell>{row.registrationDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  )
}



export default DataTable