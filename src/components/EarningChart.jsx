import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', Earning: 40000, Expenses: 30000 },
  { month: 'Feb', Earning: 40000, Expenses: 30000 },
  { month: 'Mar', Earning: 40000, Expenses: 30000 },
  { month: 'Apr', Earning: 40000, Expenses: 30000 },
  { month: 'May', Earning: 40000, Expenses: 30000 },
  { month: 'Jun', Earning: 40000, Expenses: 30000 },
  { month: 'Jul', Earning: 40000, Expenses: 30000 },
  { month: 'Aug', Earning: 40000, Expenses: 30000 },
  { month: 'Sep', Earning: 40000, Expenses: 30000 },
  { month: 'Oct', Earning: 40000, Expenses: 30000 },
  { month: 'Nov', Earning: 40000, Expenses: 30000 },
  { month: 'Dec', Earning: 40000, Expenses: 30000 },
];

const EarningsChart = () => {
  return (
    <div className="bg-[#D9D9D9] rounded-lg p-7 w-[500px]">
      <h2 className="text-lg font-semibold mb-4">Total Earning</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barGap={0}>
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `${value / 1000}k`} />
          <Tooltip formatter={(value) => `Rs. ${value}`} />
          <Legend />
          <Bar dataKey="Earning" fill="#006400" />
          <Bar dataKey="Expenses" fill="#8B0000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EarningsChart;
