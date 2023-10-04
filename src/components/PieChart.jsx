import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    {
        color: "bg-[#FEDEF3]",
        name: "Data 1",
        value: 1
    },
    {
        color: "bg-[#DEEFFF]",
        name: "Data 2",
        value: 2
    },
    {
        color: "bg-[#FEDEBC]",
        name: "Data 3",
        value: 3
    },
    {
        color: "bg-[#E6C6FF]",
        name: "Data 4",
        value: 4
    },
    {
        color: "bg-[#C3F7DE]",
        name: "Data 5",
        value: 5
    },
    {
        color: "bg-[#FCEBB0]",
        name: "Data 6",
        value: 6
    }
  ]

const COLORS = ['#FEDEF3', '#DEEFFF', '#FEDEBC', '#E6C6FF', '#C3F7DE', '#FCEBB0'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class Piechart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-label-dlhhj';

  render() {
    return (
      <ResponsiveContainer width="70%" height="70%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}





