import React, { FC } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { RootState } from '../store/store';
import { whiteTheme, blackTheme } from '../theme/theme';
import { Routing } from '../routing';

export const App: FC = () => {
  const themeColor = useSelector(
    (state: RootState) => state.user.whiteThemeColor,
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={themeColor ? whiteTheme : blackTheme}>
        <CssBaseline />
        <div className="app">
          <Routing />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};
