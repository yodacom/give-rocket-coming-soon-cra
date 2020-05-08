import React from "react";

import {
  CSSReset,
  ColorModeProvider,
  ThemeProvider,
  useTheme,
  Box,
  Stack,
} from "@chakra-ui/core";
import Form from "./../src/components/Form.js";
import LogoPlace from "./../src/components/LogoPlace";

function App({children}) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Box w="100%" align="center" justifyItems="space-around" bg="teal.500" color="black" h="93vh">
          <Stack spacing="8" align="center" justify="center">
            <CSSReset />
            {children}
            <LogoPlace />
            <Form />
          </Stack>
        </Box>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default App;
