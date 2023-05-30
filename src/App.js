import "./App.css";
import { NextUIProvider, Box } from "@nextui-org/react";
import Nav from "./components/Nav";
import { createTheme } from "@stitches/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import useDarkMode from "use-dark-mode";
import { useTheme } from "next-themes";

function App() {
  const darkTheme = createTheme({
    type: "dark",
    theme: {},
  });
  const lightTheme = createTheme({
    type: "light",
    theme: {},
  });

  const darkMode = useDarkMode(false);

  const { setTheme } = useTheme();

  return (
    // <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
    <NextUIProvider>
      <Router>
        <Nav darkMode={darkMode} />
        <Switch>
          <Route path="/">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </NextUIProvider>
  );
}

export default App;
