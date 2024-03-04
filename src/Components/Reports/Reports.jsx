import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SideNav from '../Dashboard/SideNav';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { format } from 'date-fns';
import Summary from '../summary/Summary';



const mdTheme = createTheme();

const Reports = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex-center' }}>
        <Box component="main" sx={bodyBoxStyle}>
          <CssBaseline />
          <SideNav />
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
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default Reports

const summaryPaperStyle = {
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  height: 240,
}

const bodyBoxStyle = {
  backgroundColor: (theme) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  flexGrow: 1,
  height: '100vh',
  overflow: 'auto',
}