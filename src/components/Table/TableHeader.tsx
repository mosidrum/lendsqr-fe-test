import { IconButton, Tooltip } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import TableCell from '@mui/material/TableCell';

type TableHeadProps = {
  title?: string;
};

export const TableHeader = ({ title }: TableHeadProps) => (
  <TableCell align="left" size="small">
    {title}
    <Tooltip title={`Filter ${title}`}>
      <IconButton>
        <FilterListIcon />
      </IconButton>
    </Tooltip>
  </TableCell>
);
