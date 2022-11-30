import { Components, createTheme, Theme } from '@mui/material';
import globalStyles from '../styles/style-vars';
import Mulish from '../assets/fonts/Mulish.ttf';

const typography = {
  fontFamily: 'Mulish, sans-serif',
  h2: {
    fontWeight: '700',
    letterSpacing: '0.4px',
    fontSize: '24px',
  },
  h3: {
    color: globalStyles.vars.subtitleColor,
    letterSpacing: '0.4px',
    fontWeight: '700',
    fontSize: '19px',
  },
  h4: {
    letterSpacing: '0.2px',
    fontWeight: '600',
    fontSize: '14px',
  },
  body1: {
    fontSize: '14px',
    letterSpacing: '0.3px',
  },
};

const components: Components<Omit<Theme, 'components'>> = {
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
        fontSize: '12px',
        fontWeight: '700',
        letterSpacing: '0.3px',
        textTransform: 'uppercase',
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        height: '42px',
        fontSize: '14px',
        fontWeight: '400',
        letterSpacing: '0.3px',
      },
      input: {
        height: '42px',
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
      },
      input: {
        outline: 'none',
        boxSizing: 'border-box',

        padding: '11px 16px',
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        height: '48px',

        borderRadius: '8px',

        textTransform: 'none',

        '&:hover': {
          transform: 'scale(1.05)',
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        fontSize: '14px',
        letterSpacing: '0.2px',
        textDecoration: 'none',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        padding: '30px 33px',

        height: '44px',
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontWeight: 600,
        '&:hover': {
          transform: 'scale(1.05)',
        },
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        width: '1px',
        height: '32px',
      },
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      selectLabel: {
        color: globalStyles.vars.greyColor,
        letterSpacing: '0.2px',
      },
      select: {
        color: globalStyles.vars.greyColor,
      },
      displayedRows: {
        color: globalStyles.vars.greyColor,
        letterSpacing: '0.2px',
      },
      selectIcon: {
        fill: globalStyles.vars.greyColor,
      },
      actions: {
        margin: '0 0 0 33px',
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        height: '92px',
        '&.MuiTableRow-hover:hover': {
          backgroundColor: globalStyles.vars.lightBlue,
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        fontWeight: 600,
      },
    },
  },
};

export const whiteTheme = createTheme({
  palette: {
    primary: {
      light: '#f7f8fc',
      main: '#3751ff',
      dark: '#dfe0eb',
    },
    background: {
      default: '#f7f8fC',
      paper: '#f7f8fC',
    },
    secondary: {
      light: '#9fa2b4',
      main: '#363740',
      dark: '#000',
    },
    text: {
      primary: '#252733',
      secondary: '#a4a6b3',
    },
    info: {
      light: '#fcfdfe',
      main: '#fcfdfe',
    },
    icons: {
      light: '#f0f1f7',
      main: '#c5c7cd',
    },
    button: {
      main: '#3751ff',
      contrastText: '#fff',
    },
    border: {
      main: '#e0e0e0',
    },
    divider: '#dfe0eb',
    hover: {
      light: '#dde2ff14',
      main: '#dde2ff',
    },
    error: {
      main: '#f12b2c',
    },
    warning: {
      main: '#fec400',
    },
    success: {
      main: '#29cc97',
    },
  },
  typography,
  components,
});

export const blackTheme = createTheme({
  palette: {
    primary: {
      light: '#080703',
      main: '#363740',
      dark: '#201f14',
    },
    background: {
      default: '#201f14',
      paper: '#363740',
    },
    secondary: {
      light: '#605d4b',
      main: '#fff',
      dark: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#9fa2b4',
    },
    info: {
      main: '#030201',
    },
    icons: {
      light: '#3751ff',
      main: '#3751ff',
    },
    button: {
      main: '#3751ff',
      contrastText: '#fff',
    },
    border: {
      main: '#e0e0e0',
    },
    divider: '#221d00',
    hover: {
      light: '#3751ff',
      main: '#3751ff',
    },
    error: {
      main: '#f12b2c',
    },
    warning: {
      main: '#fec400',
    },
    success: {
      main: '#29cc97',
    },
  },
  typography,
  components,
});

declare module '@mui/material/styles' {
  interface Palette {
    icons: Palette['primary'];
  }
  interface PaletteOptions {
    icons: PaletteOptions['primary'];
  }
  interface Palette {
    button: Palette['primary'];
  }
  interface PaletteOptions {
    button: PaletteOptions['primary'];
  }
  interface Palette {
    border: Palette['primary'];
  }
  interface PaletteOptions {
    border: PaletteOptions['primary'];
  }
  interface Palette {
    hover: Palette['primary'];
  }
  interface PaletteOptions {
    hover: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    button: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    button: true;
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    icons: true;
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    icons: true;
  }
}
