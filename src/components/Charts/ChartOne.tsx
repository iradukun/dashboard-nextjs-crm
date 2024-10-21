import { useFetchTraffic } from '@/hooks/useFetchTraffic';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Area } from 'recharts';

const CustomTooltip = ({ active, payload }:{ active?: boolean | undefined,payload?:any}) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="rounded-lg shadow-lg px-3 py-2"
        style={{
          backgroundColor: '#333',
          color: '#fff',
          fontSize: '16px',
          borderRadius: '8px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
        }}
      >
        <p>{`Visitors: ${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

const VisitorsLineChart = () => {
 const {data:traffic}=useFetchTraffic()

 

  return (
    <div className="flex w-full justify-center items-center h-full ">
      <div className="bg-white w-full shadow-md rounded-lg p-6">
        <div className='flex justify-between w-full'>
          <h2 className="text-2xl font-bold mb-4">Visitors</h2>
          <div className='rounded-lg bg-white py-[10px] px-[20px]'>
            Last 30 days
          </div>
        </div>
        <ResponsiveContainer width="100%" height={330}>
          <LineChart data={traffic}>
            <Tooltip cursor={{ fill: "transparent" }} content={<CustomTooltip />} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#129a74" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Line type="monotone" dataKey="uniqueVisitors" stroke="#129a74" strokeWidth={2} dot={false} />
            <Area type="monotone" dataKey="uniqueVisitors" strokeWidth={0} fillOpacity={1} fill="url(#colorUv)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VisitorsLineChart;
