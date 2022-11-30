import React, { FC } from 'react';
import { TablePagination } from '@mui/material';
import { CategoryItem } from '../../store/messages/messages.types';

type Props = {
  data: CategoryItem[];
  perPage: number;
  page: number;
  rowsPerPageVariants: number[];
  handleChangePage: (_event: unknown, newPage: number) => void;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const MessagesPagination: FC<Props> = ({
  data,
  perPage,
  page,
  rowsPerPageVariants,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <TablePagination
      SelectProps={{
        MenuProps: { disableScrollLock: true },
        sx: { margin: '0 50px 0 0' },
      }}
      rowsPerPageOptions={rowsPerPageVariants}
      component="div"
      count={data.length}
      rowsPerPage={perPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
