import * as React from "react";
import { createTheme, ThemeProvider, responsiveFontSizes, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Context from "@context";

export default function CustomStyles(props) {
  const { app } = React.useContext(Context);
  const dtehme = createTheme();

  const color = {
    mode: app.theme,
    primary: {
      main: "#f24f09",
      dark: "#bf3e07",
      contrastText: "#fff",
    },

    secondary: {
      main: "#e20547",
      contrastText: "#fff",
    },

    third: {
      main: "#f24f09",
    },

    pwhite: {
      main: "#fff",
      dark: "#fff",
      light: "#fff",
    },
    pbrown: {
      main: "#897a5f",
      dark: "#554c3b",
      contrastText: "#fff",
    },
    pgreen: {
      main: "#406860",
      dark: "#203430",
      contrastText: "#fff",
    },
    google: {
      main: "#4789f4",
      dark: "#305ea7",
      contrastText: "#fff",
    },
    error: {
      main: "#e63946",
    },
    d: {
      r: "#9d0208",
      b: "#1e6091",
      g: "#52b69a",
    },

    grey: {
      a: "#9c9fac",
      b: "#575960",
      c: "#35363a",
    },

    lOrang: {
      main: "#f24f09",
      dark: "#bf3e07",
      contrastText: "#fff",
    },
    lBlue: {
      main: "#1e5ba5",
      dark: "#143e72",
      // contrastText: "#000",
      contrastText: "#fff",
    },

    lGreen: {
      main: "#12b447",
      dark: "#0e993e",
      // contrastText: "#000",
      contrastText: "#fff",
    },
  };

  const themeSetup = createTheme({
    palette: color,
    typography: {
      fontSize: 12,
      h4: {
        fontSize: 33,
        xs: {
          fontSize: 12,
        },
      },
      h6: {
        fontSize: 20,
        [dtehme.breakpoints.up("sm")]: {
          fontSize: 16,
        },
      },
      menu: {
        fontSize: 14,
      },
      body1: {
        fontSize: 14,
        [dtehme.breakpoints.up("sm")]: {
          fontSize: 16,
        },
      },
      body2: {
        fontSize: 12,
        [dtehme.breakpoints.up("sm")]: {
          fontSize: 14,
        },
      },
      subtitle1: {
        fontSize: 10,
        [dtehme.breakpoints.up("sm")]: {
          fontSize: 12,
        },
      },
    },
    components: {
      MuiTextField: {
        defaultProps: {
          size: "small",
          autoComplete: "new-password",
          inputProps: {
            autoComplete: "new-password",
            form: {
              autoComplete: "new-password",
            },
          },
        },
      },

      MuiButton: {
        defaultProps: {
          variant: "contained",
          color: "primary",
          className: "f-capitalize",
        },
        styleOverrides: {
          containedSecondary: {
            fontWeight: "bold",
            // color: app.theme === "dark" ? color.primary.main : color.primary.main,
          },
          containedOrange: {
            color: "white",
          },
          containedSuccess: {
            color: "white",
          },
        },
      },

      MuiTypography: {
        defaultProps: {
          body1: {
            color: "initial",
          },
          body2: {
            color: "initial",
          },
          variantMapping: {
            h1: "h1",
            h2: "h2",
            h3: "h3",
            h4: "h4",
            h5: "h5",
            h6: "h6",
            subtitle1: "p",
            subtitle2: "p",
            caption: "p",
            body1: "p",
            body2: "p",
            overline: "p",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={responsiveFontSizes(themeSetup)}>
      <CssBaseline />
      <StyledEngineProvider injectFirst>{props.children}</StyledEngineProvider>
    </ThemeProvider>
  );
}
