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
      fontSize: "24px",
    },
    h3: {
      color: globalStyles.vars.subtitleColor,
      letterSpacing: "0.4px",
      fontWeight: "700",
      fontSize: "19px",
    },
    body1: {
      fontSize: "14px",
      letterSpacing: "0.3px",
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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: globalStyles.vars.greyColor,
          fontSize: "12px",
          fontWeight: "700",
          letterSpacing: "0.3px",
          textTransform: "uppercase",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "42px",

          fontSize: "14px",
          fontWeight: "400",
          letterSpacing: "0.3px",
          textTransform: "uppercase",
        },
        input: {
          height: "42px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          borderColor: globalStyles.vars.whiteGrayColor,
        },
        input: {
          outline: "none",
          boxSizing: "border-box",

          padding: "11px 16px",

          color: globalStyles.vars.fontColor,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: "48px",

          backgroundColor: globalStyles.vars.buttonColor,

          borderRadius: "8px",
          borderColor: globalStyles.vars.buttonColor,

          color: globalStyles.vars.whiteColor,
          textTransform: "none",

          "&:hover": {
            backgroundColor: globalStyles.vars.whiteColor,

            color: globalStyles.vars.buttonColor,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: globalStyles.vars.buttonColor,
          fontWeight: 600,
          fontSize: "14px",
          letterSpacing: "0.2px",
          textDecoration: "none",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      },
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
export default theme;
