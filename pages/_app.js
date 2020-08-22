import "../styles/globals.css";

import { ThemeProvider } from "theme-ui";
import theme from "../styles/theme/theme";
import "react-chat-elements/dist/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
