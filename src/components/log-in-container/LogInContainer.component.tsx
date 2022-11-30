import React, { ReactNode, FC } from 'react';
import { Container, useTheme } from '@mui/material';

type LogInContainerType = {
  children: ReactNode;
};

export const LogInContainer: FC<LogInContainerType> = ({ children }) => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        margin: 0,
        padding: '20px',

        minHeight: '100vh',

        backgroundColor: `${theme.palette.secondary.main}`,
      }}
      maxWidth={false}
    >
      {children}
    </Container>
  );
};
