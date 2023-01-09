import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { makeStyles } from "@mui/material/styles";
//
import { CookiesProvider } from "react-cookie";
import { CssBaseline } from "@mui/material";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider>
      <CssBaseline />
      {/* <ChakraProvider> */}
      <App />
    </CookiesProvider>
    {/* </ChakraProvider> */}
  </React.StrictMode>
);
