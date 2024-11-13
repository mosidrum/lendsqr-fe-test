import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const CustomPagination = () => (
  <Stack spacing={2}>
    <Pagination count={10} shape="rounded" />
  </Stack>
);
