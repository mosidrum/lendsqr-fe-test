import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import { IoFilterOutline } from 'react-icons/io5';

type TableHeadProps = {
  title: string;
  isLastItem: boolean;
  onClick: () => void;
};

const CustomTableCell = styled(TableCell)({
  paddingLeft: 30,
  color: '#545f7d',
  fontWeight: 500,
  fontSize: 12,
  borderBottom: 'none'
});

export const TableHeader = ({ title, isLastItem, onClick }: TableHeadProps) => (
  <CustomTableCell align="left" size="small" className="text-color-primary">
    <div className="d-flex align-items-center gap-1 my-1">
      <div className="fw-bold">{title}</div>
      {isLastItem ? null : (
        <IoFilterOutline onClick={onClick} className="cursor-pointer" size={20} fontWeight={500} />
      )}
    </div>
  </CustomTableCell>
);
