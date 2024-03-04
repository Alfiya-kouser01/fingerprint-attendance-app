import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../util/Title';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";



function preventDefault(event) {
  event.preventDefault();
}

export default function Summary({ title, totalCount, todayCount, asOfData }) {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', alignItems: 'centre' }}>
        <Title style={{ color: 'red', fontWeight: 'bold' }}>{title}</Title>
      </div>

      <Box sx={{ m: 0 }}>
        <Grid container spacing={-2}>
          <Grid item xs={12} style={{ margin: 0, padding: 0 }}>
            <Title>{'Total'}</Title>
          </Grid>
          <Grid item xs={12} style={{ mr: 1, padding: 0 }}>
            <Typography component="p" variant="h5" style={{ color: 'green', fontWeight: 'bold' }}>
              {totalCount}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ m: 0 }}>
        <Grid container spacing={-2}>
          <Grid item xs={12} style={{ margin: 0, padding: 0 }}>
            <Title>{'Today'}</Title>
          </Grid>
          <Grid item xs={12} style={{ mr: 1, padding: 0 }}>
            <Typography component="p" variant="h5" style={{ color: 'orange', fontWeight: 'bold' }}>
              {todayCount}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}