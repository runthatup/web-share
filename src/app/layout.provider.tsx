"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import React from "react";

export function Providers({ children }: React.PropsWithChildren) {
  const theme = extendTheme({
    colors: {
      brand: {
        red: {
          100: "red",
        },
        blue: {
          100: "blue",
        },
        green: {
          100: "green",
        },
        gray: {
          100: "#0000001F",
          200: "#71717A",
        },
      },
    },
    styles: {
      global: {
       body: {
        bg: "#101727",
        color: "white",
      },
      },
    },
  });

  return (
        <CacheProvider>
          <ChakraProvider theme={theme}>
              {children}
          </ChakraProvider>
        </CacheProvider>
  );
}
