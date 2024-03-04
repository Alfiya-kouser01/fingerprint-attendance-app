import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '../Chart/Chart';
import Summary from '../summary/Summary';
import Copyright from '../util/Copyright';
import Box from '@mui/material/Box';
import { format } from 'date-fns';
import DataTable from '../DataTable/DataTable';


const DashboardBody = () => {

    const [registeredStudents, setRegisteredStudents] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:9191/api/students/getAllStudents')
           .then((res) => res.json())
           .then((data) => {
              console.log("data");
              console.log(data);
              setRegisteredStudents(data);
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    return (
        <>
            <Box component="main" sx={bodyBoxStyle}>
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
                    <Grid container spacing={3} >
                        {/* Chart */}
                        <Grid item xs={12} md={4} lg={6}>
                            <Paper sx={chartPaperStyle}>
                                <Chart />
                            </Paper>
                        </Grid>

                        {/* Total Staff */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper sx={summaryPaperStyle}>
                                <Summary
                                    title={"Staff Registered"}
                                    totalCount={75}
                                    todayCount={5}
                                    asOfData={format(new Date(Date.now()), 'dd-MM-yyyy')}
                                />
                            </Paper>
                        </Grid>

                        {/* Total Students */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper sx={summaryPaperStyle}>
                                <Summary
                                    title={"Students Registered"}
                                    totalCount={164}
                                    todayCount={17}
                                    asOfData={format(new Date(Date.now()), 'dd-MM-yyyy')}
                                />
                            </Paper>
                        </Grid>

                        {/* Recent Orders */}
                        {/* <Grid item xs={12}>
                            <Paper sx={dataTableStype}>
                                <Orders />
                            </Paper>
                        </Grid> */}

                        <Grid item xs={12}>
                            <Paper sx={dataTableStype}>
                                <DataTable 
                                    tableTitle = {"Registered Students"}
                                    tableHeader = {studentRegisteredTableHeader}
                                    tableRows = {registeredStudents}
                                />
                            </Paper>
                        </Grid>

                        <Grid item xs={12}>
                            <Paper sx={dataTableStype}>
                                <DataTable 
                                    tableTitle = {"Registered Staff"}
                                    tableHeader = {staffRegisteredTableHeader}
                                    tableRows = {rows}
                                />
                            </Paper>
                        </Grid>

                    </Grid>
                    <Copyright sx={{ pt: 4 }} />
                </Container>
            </Box>
        </>
    )
}

const studentRegisteredTableHeader = {
    usn: "USN",
    name: "Name",
    email: "Email",
    bioId: "Biometric ID",
    regDate: "Registration Date",
}

const staffRegisteredTableHeader = {
    usn: "Staff ID",
    name: "Name",
    email: "Email",
    bioId: "Biometric ID",
    regDate: "Registration Date",
}

function createData(id, usn, name, email, bioId, regDate) {
    return { id, usn, email, name, bioId, regDate};
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


const bodyBoxStyle = {
    backgroundColor: (theme) =>
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
}

const chartPaperStyle = {
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    height: 240,
}

const summaryPaperStyle = {
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    height: 240,
}

const dataTableStype = {
    p: 2,
    display: 'flex',
    flexDirection: 'column'
}


export default DashboardBody