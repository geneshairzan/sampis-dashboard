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
      main: "#1e5ba5",
      dark: "#143e72",
      contrastText: "#fff",
    },

    third: {
      main: "#12b447",
      dark: "#0e993e",
      contrastText: "#fff",
    },

    pwhite: {
      main: "#fff",
      dark: "#fff",
      light: "#fff",
    },
    error: {
      main: "#e63946",
    },
  };

  const themeSetup = createTheme({
    palette: color,
    typography: {
      fontSize: 12,
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
