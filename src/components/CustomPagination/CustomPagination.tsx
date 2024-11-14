import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ChangeEvent } from 'react';

type CustomPaginationProps = {
  count: number;
  page: number;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
};

export const CustomPagination = ({ count, page, onChange }: CustomPaginationProps) => (
  <Stack spacing={2}>
    <Pagination count={count} page={page} onChange={onChange} shape="rounded" />
  </Stack>
);
