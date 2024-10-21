import React, { useState, useMemo } from 'react';
import {
  ColumnDef,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Person } from '@/types/api';
import { FaChevronLeft, FaChevronRight, FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

interface CustomerTableProps {
  data: Person[];
  columns: ColumnDef<Person>[];
}

const CustomerTable: React.FC<CustomerTableProps> = React.memo(({ data, columns }) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchField, setSearchField] = useState<string>('all');

  const filteredData = useMemo(() => {
    return data.filter(row => {
      if (searchField === 'all') {
        return Object.values(row).some(value =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      return String(row[searchField as keyof Person])
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
  }, [data, searchTerm, searchField]);

  const table = useReactTable({
    columns,
    data: filteredData,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  });

  return (
    <div className="p-4 bg-white rounded-lg">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border p-1 rounded w-96"
        />
        <select value={searchField} onChange={e => setSearchField(e.target.value)} className="border p-1 rounded">
          <option value="all">All Fields</option>
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="email">Email</option>
        </select>
      </div>

      {filteredData.length === 0 ? (
        <div>No results found.</div>
      ) : (
        <table className="min-w-full">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id} className="rounded-lg">
                {headerGroup.headers.map((header, index) => (
                  <th key={header.id} className={`h-[40px] bg-gray-200 ${index === 0 && "rounded-l-lg"} ${index === headerGroup.headers.length-1 && "rounded-r-lg"} `}>
                    <div
                      {...{
                        className: header.column.getCanSort() ? 'cursor-pointer' : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="border-b">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="p-2 text-center">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="flex items-center gap-4 mt-4 justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className={`p-1 rounded ${!table.getCanPreviousPage() ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <FaAngleDoubleLeft />
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className={`p-1 rounded ${!table.getCanPreviousPage() ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className={`p-1 rounded ${!table.getCanNextPage() ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <FaChevronRight />
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className={`p-1 rounded ${!table.getCanNextPage() ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <FaAngleDoubleRight />
          </button>
        </div>

        <div>
          Page <strong>{table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</strong>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="number"
            min="1"
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16"
          />
          <select
            value={table.getState().pagination.pageSize}
            onChange={e => {
              table.setPageSize(Number(e.target.value));
            }}
            className="border p-1 rounded"
          >
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>Show {pageSize}</option>
            ))}
          </select>
        </div>
      </div>

      <div className='text-center'>
        Showing {table.getRowModel().rows.length} of {table.getRowCount()} Rows
      </div>
    </div>
  );
});

export default CustomerTable;
