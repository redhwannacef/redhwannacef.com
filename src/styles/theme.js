import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export default responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#bf616a",
      },
      text: {
        primary: "#222222",
      },
    },
    typography: {
      fontWeightBold: 600,
      fontFamily: ["Open Sans", "Helvetica", "Arial", "sans-serif"].join(","),
      button: {
        textTransform: "inherit",
      },
      h1: {
        fontSize: "3rem",
      },
      h2: {
        fontSize: "2rem",
      },
      h3: {
        fontSize: "1.4rem",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "html,body,#root": {
            height: "100%",
            minHeight: "100%",
          },
          "#root": {
            display: "flex",
            flexDirection: "column",
          },
        },
      },
      MuiButton: {
        root: {
          borderRadius: 12,
        },
      },
      MuiPaper: {
        rounded: {
          borderRadius: 12,
        },
      },
    },
    props: {
      MuiButton: {
        disableElevation: true,
      },
      MuiPaper: {
        variant: "outlined",
      },
    },
  })
);
