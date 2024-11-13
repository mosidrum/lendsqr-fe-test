import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TableHeader } from './TableHeader.tsx';
import { User } from '../../types';

type TableDataProps = {
  users: User[];
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const tableHeadData = [
  'ORGANISATION',
  'USERNAME',
  'EMAIL',
  'PHONE NUMBER',
  'DATE JOINED',
  'STATUS',
  ''
];

export const DataTable = ({ users }: TableDataProps) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {tableHeadData.map((header, index) => (
            <TableHeader
              title={header}
              key={index}
              isLastItem={index === tableHeadData.length - 1}
            />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <StyledTableRow key={user.userId}>
            <StyledTableCell>{user.organization}</StyledTableCell>
            <StyledTableCell align="left">{user.username}</StyledTableCell>
            <StyledTableCell align="left">{user.email}</StyledTableCell>
            <StyledTableCell align="left">{user.phoneNumber}</StyledTableCell>
            <StyledTableCell align="left">{user.dateJoined}</StyledTableCell>
            <StyledTableCell align="left">{user.status}</StyledTableCell>
            <StyledTableCell align="left">
              <BsThreeDotsVertical />
            </StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
