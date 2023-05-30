import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { createTheme } from "@nextui-org/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
const darkTheme = createTheme({
  type: "dark",
  theme: {},
});
const lightTheme = createTheme({
  type: "light",
  theme: {},
});
root.render(
  <React.StrictMode>
    <NextThemesProvider
      defaultTheme="light"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <App />
    </NextThemesProvider>
  </React.StrictMode>
);

reportWebVitals();
