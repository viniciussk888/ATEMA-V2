import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { AlertProvider } from "../contexts/AlertContext";
import { UserProvider } from "../contexts/UserContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerProvider>
        <UserProvider>
          <AlertProvider>
            <Component {...pageProps} />
          </AlertProvider>
        </UserProvider>
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
