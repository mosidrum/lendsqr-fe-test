import { IconButton, Tooltip } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

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
  <CustomTableCell align="left" size="small" className="text-color-primary font-small">
    {title}
    {isLastItem ? null : (
      <Tooltip title="filter table">
        <IconButton onClick={onClick}>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    )}
  </CustomTableCell>
);
