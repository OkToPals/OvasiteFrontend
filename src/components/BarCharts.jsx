import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'August',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'September',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'October',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'November',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'December',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  }
];


export default class Barchart extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="rgba(208, 232, 255, 0.70)" />
          <Bar dataKey="uv" fill="rgba(254, 208, 238, 0.70)" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
