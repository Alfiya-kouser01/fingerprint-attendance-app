import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import DashboardBody from './DashboardBody';
import SideNav from './SideNav';

const mdTheme = createTheme();

function Dashboard() {
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideNav />
        <DashboardBody />
      </Box>
    </ThemeProvider>
  );
}

export default Dashboard;
