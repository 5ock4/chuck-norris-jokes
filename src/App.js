import { Box, Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import {Helmet} from 'react-helmet'

import Jokes from "./jokes/pages/Jokes";
import theme from "./shared/themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* TODO: fix this */}
      {/* <Helmet>
          <meta charSet="utf-8" />
          <title>Chuck Norris - Jokes</title>
          <link rel="canonical" href="http://example.com" />
      </Helmet> */}
      <CssBaseline />
      <Container maxWidth="sm">
        <Box my={4}>
          <Jokes />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
