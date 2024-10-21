import { useFetchTraffic } from '@/hooks/useFetchTraffic';
import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const BounceRateGraph = () => {
  const {data:traffic}=useFetchTraffic()
  
  const data = [
    { value: traffic&&traffic?.length>0?traffic[29].bounceRate:0 },  
    { value: 100-(traffic?traffic[29].bounceRate:0) },  
  ];
  const COLORS = ['#6C3BDD', '#E0E0E0'];  

  return (
    <div className="bg-white flex justify-center flex-col items-center w-full p-6 rounded-lg shadow-md  ">
      {/* Header */}
      <div className="mb-4 w-full">
        <h3 className="text-gray-500 text-sm font-medium">Bounce Rate</h3>
        <hr className="border-gray-200 mt-2"/>
      </div>

     
      <PieChart width={250} height={170}>
        <Pie
          width={300}
          height={300}
          data={data}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>

    
      <div className="text-center w-[250px] mt-[-100px] text-3xl font-semibold">{traffic&&traffic?.length>0?traffic[29].bounceRate:0}%</div>
      <p className="text-center  w-[250px] text-sm text-gray-500">Bounce rate</p>
    
    </div>
  );
};

export default BounceRateGraph;
