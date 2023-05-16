import GlobalStyle from "@/styles/globalstyles";
import theme from "@/styles/theme";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "styled-components";

const ROBOTO_FONT = Roboto({
  weight: ["300", "500", "700"],
  subsets: ["cyrillic", "greek", "latin"],
});

console.log(ROBOTO_FONT);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
