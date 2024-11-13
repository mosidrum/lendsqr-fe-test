import { IconButton, Tooltip } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import TableCell from '@mui/material/TableCell';

type TableHeadProps = {
  title?: string;
  isLastItem: boolean;
};

export const TableHeader = ({ title, isLastItem }: TableHeadProps) => (
  <TableCell align="left" size="small">
    {title}
    {isLastItem ? null : (
      <Tooltip title={`Filter ${title}`}>
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    )}
  </TableCell>
);
