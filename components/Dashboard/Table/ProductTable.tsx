/* eslint-disable react/jsx-key */
import Link from 'next/link'
import { PropsWithChildren, ReactElement, useMemo } from 'react'
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useAsyncDebounce,
} from 'react-table'

import TableGlobalFilter from './TableGlobalFilter'

type TableProps = {
  TableData: {}[]
  colum: {}
}
interface Data {
  name: string
  description: string
  category: string
  price: Number
  stock: Number
}

function ProductTable(props): ReactElement {
  const { TableData, colum } = props
  const columns = useMemo(() => colum, [])
  const data = TableData
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  return (
    <div className=" border mx-8 bg-gray-900 border-sky-500 rounded-lg mt-8 flex flex-col">
      <div className="px-10 flex justify-between items-center">
        <TableGlobalFilter
          filter={state.globalFilter}
          setFilter={setGlobalFilter}
        ></TableGlobalFilter>
        <Link href="newproduct" passHref>
          <button className=" h-10 border hover:border-sky-400 hover:bg-sky-800  border-sky-500  bg-gray-900  px-7 rounded-md text-sm text-sky-400 hover:text-white font-medium transition duration-200">
            Add Product
          </button>
        </Link>
      </div>

      <div className=" max-w-full -my-2 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block  sm:px-6 lg:px-8 overflow-x-auto ">
          <table className="table-auto " {...getTableProps()}>
            <thead className="bg-gray-900">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, _i) => (
                    <th
                      className="group px-3 py-2 lg:px-6 lg:py-3 text-center text-xs font-medium text-white uppercase tracking-wider border-b border-sky-500"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className="flex items-center justify-between">
                        {column.render('Header')}
                        {/* Add a sort direction indicator */}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <p className="w-4 h-4 text-gray-400">1</p>
                            ) : (
                              <p className="w-4 h-4 text-gray-400">0</p>
                            )
                          ) : (
                            <p className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100">
                              2
                            </p>
                          )}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              className="  bg-gray-900 divide-y divide-sky-900"
              {...getTableBodyProps()}
            >
              {page.map((row) => {
                prepareRow(row)
                return (
                  <tr
                    className="  hover:bg-sky-900  bg-gray-800 odd:bg-gray-700 transition duration-200"
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          className=" text-center border-gray-900 border-x py-2 lg:px-4 text-gray-200 whitespace-nowrap"
                          role="cell"
                          {...cell.getCellProps()}
                        >
                          {cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="py-3 flex items-center justify-evenly m-6 p-10">
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2 items-baseline">
            <span className="text-sm text-gray-200">
              Page
              <span className="font-medium text-gray-200">
                {state.pageIndex + 1}
              </span>
              of
              <span className="font-medium text-gray-200">
                {pageOptions.length}
              </span>
            </span>
            <label>
              <span className="sr-only">Items Per Page</span>
              <select
                className=" bg-gray-900 mt-1 block w-full rounded-md border border-sky-800 focus:border-sky-500 text-white"
                value={state.pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value))
                }}
              >
                {[5, 10, 20].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Pagination button */}
          <div className=" relative inline-flex rounded-md shadow-sm -space-x-px">
            <button
              className="px-4 rounded-l-md hover:bg-sky-900 border border-sky-400 text-gray-200"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              First
            </button>
            <button
              className="px-4  hover:bg-sky-900 border border-sky-400 text-gray-200"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {'<<'}
            </button>
            <button
              className="px-4 hover:bg-sky-900 border border-sky-400 text-gray-200"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {'>>'}
            </button>
            <button
              className="px-4 rounded-r-md hover:bg-sky-900 border border-sky-400 text-gray-200"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductTable
