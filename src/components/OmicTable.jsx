import React from 'react';
import styled from '@emotion/styled';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';

const OmicTable = () => {
  const data = [
    { field: 'date', type: 'date' },
    { field: 'device_type', type: 'character varying' },
    { field: 'country', type: 'character varying' },
    { field: 'sessions', type: 'integer' },
    { field: 'revenue', type: 'integer' },
  ];

  const StyledTableContainer = styled(TableContainer)`
    max-height: 100%;
    overflow: auto;
  `;

  const StyledTable = styled(Table)`
    color: #fff;
    overflow: auto;
  `;

  return (
    <TableContainer sx={{ maxHeight: '100%' }}>
      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell sx={{ py: '4px', lineHeight: '1.2', border: '1px solid #727E8A' }}><Typography color='white'>Field</Typography></TableCell>
            <TableCell sx={{ py: '4px', lineHeight: '1.2', border: '1px solid #727E8A' }}><Typography color='white'>Type</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.field}>
              <TableCell sx={{ py: '4px', lineHeight: '1.2', border: '1px solid #727E8A' }} color='#fff'><Typography color='#727E8A'>{row.field}</Typography></TableCell>
              <TableCell sx={{ py: '4px', lineHeight: '1.2', border: '1px solid #727E8A' }} color='#fff'><Typography color='#727E8A'>{row.type}</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default OmicTable;
