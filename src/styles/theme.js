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
      fontFamily: ["Open Sans", "Helvetica", "Arial", "sans-serif"].join(","),
      button: {
        textTransform: "inherit",
      },
      h2: {
        fontWeight: 400,
        fontSize: "2rem",
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
