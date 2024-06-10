import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./GlobalStyles";
import { ChakraProvider } from '@chakra-ui/react'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <FluentProvider theme={webLightTheme}>
     <ChakraProvider>
     <GlobalStyles>
      <App />
    </GlobalStyles>
    </ChakraProvider>
     </FluentProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
