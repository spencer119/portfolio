import "./App.css";
import { NextUIProvider, Box } from "@nextui-org/react";
import Nav from "./components/Nav";
import { createTheme } from "@stitches/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import { useTheme } from "next-themes";

function App() {
  const { setTheme } = useTheme();

  return (
    // <NextUIProvider theme={darkMode.value ? darkTheme : lightTheme}>
    <NextUIProvider>
      <Router>
        <Nav />
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
