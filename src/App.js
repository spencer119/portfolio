import "./App.css";
import { NextUIProvider, Box } from "@nextui-org/react";
import Nav from "./components/Nav";
import { createTheme } from "@stitches/react";
function App() {
  const theme = createTheme({
    type: "dark",
    theme: {},
  });

  return (
    <NextUIProvider theme={theme}>
      <Nav />
    </NextUIProvider>
  );
}

export default App;
