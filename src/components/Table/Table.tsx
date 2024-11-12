import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableHeader } from './TableHeader.tsx';

const tableHeadData = [
  'ORGANISATION',
  'USERNAME',
  'EMAIL',
  'PHONE NUMBER',
  'DATE JOINED',
  'STATUS',
  ''
];

export const DataTable = () => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {tableHeadData.map((header, index) => (
            <TableHeader title={header} key={index} />
          ))}
        </TableRow>
      </TableHead>
      <TableBody />
    </Table>
  </TableContainer>
);
