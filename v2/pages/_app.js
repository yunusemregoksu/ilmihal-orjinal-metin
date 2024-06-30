import React from "react";
import { Analytics } from "@vercel/analytics/react";
import {
  Text,
  createTheme,
  NextUIProvider,
  Link,
  Container,
  Card,
  Row,
  Col,
  Button,
} from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import TopBar from "../components/TopBar";
import GA4 from "../components/GA4";
import "../styles/main.css";
import "remixicon/fonts/remixicon.css";
import AppPromotion from "../components/AppPromotion";

const lightTheme = createTheme({
  type: "light",
});

const darkTheme = createTheme({
  type: "dark",
});

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme={"system"}
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <GA4 />
      <NextUIProvider>
        <TopBar />
        <Container xs>
          <Component {...pageProps} />
          <Analytics />
          <div className="footer">
            CVM
          </div>
        </Container>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
