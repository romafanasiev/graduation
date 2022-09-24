import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { createTheme } from "@mui/material/styles";

import { CssBaseline, ThemeProvider } from "@mui/material";

import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import Mulish from "./assets/fonts/Mulish.ttf";

import store from "./store/store";

import "./index.scss";
import globalStyles from "./utils/styles/style-vars";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    icons: {
      main: "#c5c7cd",
    },
    button: {
      main: "#3751ff",
    },
    background: {
      default: "#f7f8fc",
    },
  },

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
    h4: {
      color: globalStyles.vars.fontColor,
      letterSpacing: "0.2px",
      fontWeight: "600",
      fontSize: "14px",
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
    MuiAppBar: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          padding: "30px 33px",

          height: "44px",

          backgroundColor: globalStyles.vars.secondaryBackgroundColor,

          color: globalStyles.vars.fontColor,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: globalStyles.vars.buttonColor,
          fontWeight: 600,
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          width: "1px",
          height: "32px",

          backgroundColor: globalStyles.vars.secondaryWhiteColor,
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        selectLabel: {
          color: globalStyles.vars.greyColor,
          letterSpacing: "0.2px",
        },
        select: {
          color: globalStyles.vars.fontColor,
        },
        displayedRows: {
          color: globalStyles.vars.greyColor,
          letterSpacing: "0.2px",
        },
        selectIcon: {
          fill: globalStyles.vars.greyColor,
        },
        actions: {
          margin: "0 0 0 33px",
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
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

declare module "@mui/material/styles" {
  interface Palette {
    icons: Palette["primary"];
  }
  interface PaletteOptions {
    icons: PaletteOptions["primary"];
  }
  interface Palette {
    button: Palette["primary"];
  }
  interface PaletteOptions {
    button: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Badge" {
  interface BadgePropsColorOverrides {
    button: true;
  }
}

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    icons: true;
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
export default theme;
