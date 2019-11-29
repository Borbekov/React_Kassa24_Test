import React from "react";
import Button from './Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import moment from "moment";

const TableComponent = ({ header, data, onClick }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {header.map((h, index) => (
            <TableCell key={index}>{h.title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data && data.map(d => (
          <TableRow key={d.id}>
            <TableCell>
              <img src={d.avatar} className="avatar"/>
            </TableCell>
            <TableCell>{d.title}</TableCell>
            <TableCell>{d.text}</TableCell>
            <TableCell>
              {moment(d.createdAt).subtract(10, 'days').calendar()}
            </TableCell>
            <TableCell>
              <Button
                onClick={() => onClick(d.id)}
                name="Delete"
                color="secondary"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableComponent;
