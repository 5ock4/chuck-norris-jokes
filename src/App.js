import {Box, Container} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from "@material-ui/core/CssBaseline"

import Jokes from './jokes/pages/Jokes'
import theme from './shared/themes/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Container maxWidth='md'>
        <Box my={4}>
          <Jokes/>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
