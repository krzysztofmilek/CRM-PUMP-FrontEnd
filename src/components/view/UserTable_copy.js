import { useTable } from 'react-table';
import { useMemo } from 'react';
import React from "react";
 

function UserTable(props){
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        col14: 'Ustaw Plan'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col14: 'Ustaw Plan'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col14: 'Ustaw Plan'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col14: 'Ustaw Plan'
      },
    ],
    []
  )

  const columns = useMemo(
    () => [
      {
        Header: 'Imię Nazwisko',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Styczeń',
        accessor: 'col2',
      },
      {
        Header: 'Luty',
        accessor: 'col3',
      },
      {
        Header: 'Marzec',
        accessor: 'col4',
      },
      {
        Header: 'Kwiecien',
        accessor: 'col5',
      },
      {
        Header: 'Maj',
        accessor: 'col6',
      }, {
        Header: 'Czerwiec',
        accessor: 'col7',
      },
      {
        Header: 'Lipiec',
        accessor: 'col8',
      },
      {
        Header: 'Sierpień',
        accessor: 'col9',
      },
      {
        Header: 'Wrzeseiń',
        accessor: 'col10',
      },
      {
        Header: 'Październik',
        accessor: 'col11',
      },
      {
        Header: 'Listopad',
        accessor: 'col12',
      },
      {
        Header: 'Grudzień',
        accessor: 'col13',
      },
      {
        Header: 'Ustaw',
        accessor: 'col14',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                         >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
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
  )
} export default UserTable
