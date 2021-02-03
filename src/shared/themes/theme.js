import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          height: '100%'
        },
        body: {
          textAlign: 'center',
          backgroundImage: 'linear-gradient(to right top, #ffffff, #f1f1f1, #e2e2e2, #d4d4d4, #c6c6c6)',
        }
      }
    }
  }
});

export default theme;