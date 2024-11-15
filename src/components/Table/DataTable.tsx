import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useState } from 'react';
import { TableHeader } from './TableHeader.tsx';
import { User } from '../../types';
import { Popup } from '../Popup';
import { Filter } from '../Filter';
import { textToLowerCase } from '../../utils';
import { StatusBadge } from './StatusBadge.tsx';
import { paths } from '../../routes/paths.ts';
import { useMobileScreen } from '../../hooks';

type TableDataProps = {
  users: User[];
};

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {}, // Clear default styles for header cells
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: 'white',
    color: '#545f7d'
  }
}));

const StyledTableRow = styled(TableRow)(() => ({
  '& td, & th': {
    padding: '28px'
  }
}));

export const DataTable = ({ users }: TableDataProps) => {
  const [openPopupIndex, setOpenPopupIndex] = useState<number | null>(null);
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const navigate = useNavigate();
  const isMobileScreen = useMobileScreen();

  const tableHeadData = [
    'ORGANISATION',
    'USERNAME',
    'EMAIL',
    'PHONE NUMBER',
    'DATE JOINED',
    'STATUS',
    ''
  ];

  const tableHeadData2 = ['ORGANISATION', 'USERNAME', 'EMAIL'];
  const tableHeaders = isMobileScreen ? tableHeadData2 : tableHeadData;

  const handlePopupToggle = (index: number) => {
    setOpenPopupIndex(openPopupIndex === index ? null : index);
  };

  return (
    <TableContainer component={Paper} className="table-container">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ position: 'relative' }}>
            {tableHeaders.map((header, index) => (
              <TableHeader
                title={header}
                key={index}
                isLastItem={index === tableHeadData.length - 1}
                onClick={() => setOpenFilter(!openFilter)}
              />
            ))}
          </TableRow>
        </TableHead>
        {openFilter && <Filter />}
        <TableBody>
          {users.map((user, index) => (
            <StyledTableRow key={user.userId}>
              <StyledTableCell>{user.organization}</StyledTableCell>
              <StyledTableCell align="left">{user.username}</StyledTableCell>
              <StyledTableCell align="left">{user.personalInfo.email}</StyledTableCell>
              {!isMobileScreen && (
                <>
                  <StyledTableCell align="left">{user.personalInfo.phoneNumber}</StyledTableCell>
                  <StyledTableCell align="left">{textToLowerCase(user.dateJoined)}</StyledTableCell>
                  <StyledTableCell align="left">
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <StatusBadge status={user.status} />
                    </div>
                  </StyledTableCell>
                </>
              )}

              <StyledTableCell align="left" style={{ position: 'relative' }}>
                <BsThreeDotsVertical
                  className="cursor-pointer"
                  onClick={() => handlePopupToggle(index)}
                />
                {openPopupIndex === index && (
                  <Popup
                    openPopup={openPopupIndex === index}
                    setOpenPopup={() => handlePopupToggle(index)}
                    onClick={() => navigate(`${paths.dashboard}/${user.userId}`)}
                  />
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
