"use client";
import React from "react";
import VisitorChart from "../Charts/ChartOne";
import BounceRateGraph from "../Charts/BounceRate";
import { ColumnDef } from "@tanstack/react-table";
import { Person } from "@/types/api";
import CustomerTable from "../Table/table";
import { useFetchCustomer } from "@/hooks/useFetchCustomer";
import { useFetchTraffic } from "@/hooks/useFetchTraffic";

const Dashboard: React.FC = () => {
  const columns = React.useMemo<ColumnDef<Person>[]>(
    () => [
      {
        header: 'Name', accessorKey: 'name', cell: (prop) => {
          return (
            <div>
            {prop.row.original.firstName}{" "}{prop.row.original.lastName}
          </div>
        )
      } },
      { header: 'Email', accessorKey: 'email' },
      { header: 'Signup Date', accessorKey: 'createdAt' },
      { header: 'Last Activity', accessorKey: 'lastActivity' }
    ],
    []
  )
  const { data: traffic } = useFetchTraffic()
  const totalPageViews =traffic?traffic.reduce((acc, entry) => acc + entry.pageViews, 0):0;
  const { data: customers, isLoading, error } = useFetchCustomer()
  
  if (isLoading) {
    return (
      <div className="h-[300px] flex items-center justify-center w-full">
 <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
</div>        )
  }
  if (error) {
    return (
      <div className="h-[300px] flex items-center justify-center w-full">
        <p>{error.message}</p>
</div>    
    )
   
  }
  return (
    <div className="flex flex-col gap-[30px]">
  

      <div className="mt-4 flex xl:flex-row flex-col  gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <VisitorChart />
        <div className="min-w-[300px]  flex lg:flex-col md:flex-row flex-col gap-[20px]">

         <div className="bg-white w-full  p-6 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-500 text-sm font-medium">Page Views</h3>
        
      </div>

      {/* Main Amount */}
            <div className="text-3xl font-semibold mb-4">{totalPageViews.toLocaleString()}</div>

    
      <div className="flex justify-between items-end">
        {/* In Section */}
        <div>
                <p className="text-lg font-medium">{traffic?traffic[29].pageViews.toLocaleString():0} <span className="text-gray-500 text-sm">Visitors</span></p>
                <p className="text-green-500 text-sm">+ {((((traffic?traffic[29].pageViews:0)/(totalPageViews>0?totalPageViews:1)))*100).toFixed(2)}% vs last day</p>
        </div>
       
      </div>


     
          </div>
          <BounceRateGraph/>
        </div>
       
      </div>
      <CustomerTable columns={columns} data={customers?customers:[]}/>
    </div>
  );
};

export default Dashboard;
