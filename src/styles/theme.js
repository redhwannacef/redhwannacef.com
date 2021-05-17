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
      button: {
        textTransform: "inherit",
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
          "strong, b": {
            fontWeight: 500,
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
