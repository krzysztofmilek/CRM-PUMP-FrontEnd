import { useTable } from 'react-table';
import { useMemo } from 'react';
import React from "react";



function UserTable(props){
 
  

  const data= props.users;
console.log(data)



  const columns = useMemo(
    () => [
      {
        Header: 'Imię Nazwisko',
        accessor: 'col1', // accessor is the "key" in the data
      },
   
     
      {
        Header: 'Ustaw',
        accessor: 'col2',
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
  } = useTable({ columns, data})

  return (
    <table {...getTableProps()}>
    <thead>
      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()}>
              {column.render("Header")}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row) => {
        prepareRow(row);
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map((cell) => (
              <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </table>
  )
} export default UserTable
