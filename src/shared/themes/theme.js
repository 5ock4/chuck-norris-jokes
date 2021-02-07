import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#004d40",
    },
    secondary: {
      main: "#26a69a",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: "100%",
        },
        body: {
          textAlign: "center",
          backgroundColor: "#ededed",
        },
      },
    },
  },
})

export default theme
