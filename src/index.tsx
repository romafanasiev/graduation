import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import Mulish from "./assets/fonts/Mulish.ttf";

import "./index.scss";
import globalStyles from "./utils/styles/style-vars";

const theme = createTheme({
  typography: {
    fontFamily: "Mulish, sans-serif",
    h2: {
      color: globalStyles.vars.fontColor,
      fontWeight: "700",
      letterSpacing: "0.4px",
      fontSize: "19px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Mulish';
          font-style: normal;
          font-weight: 400;
          src: url(${Mulish}) format('woff2');
        },
      `,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
