import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import Title from '../util/Title';

const data = [
  { month: 'Jan', staffReg: 100, studentReg: 200 },
  { month: 'Feb', staffReg: 150, studentReg: 220 },
  { month: 'Mar', staffReg: 200, studentReg: 250 },
  { month: 'Apr', staffReg: 120, studentReg: 180 },
  { month: 'May', staffReg: 180, studentReg: 210 },
  { month: 'Jun', staffReg: 220, studentReg: 280 },
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Overall Registration</Title>
      <ResponsiveContainer>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="staffReg" fill="#265073" name="Staff Registration" />
          <Bar dataKey="studentReg" fill="#2D9596" name="Student Registration" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}