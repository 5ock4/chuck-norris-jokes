import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
        },
        body: {
          textAlign: "center",
          backgroundImage:
            "linear-gradient(to right top, #ffffff, #f1f1f1, #e4e4e4, #d6d6d6, #c9c9c9);",
        },
      },
    },
  },
});

export default theme;
