import { Navbar, Text, Switch } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { GitHub, LinkedIn, DarkMode, LightMode } from "@mui/icons-material";
import { Link } from "react-router-dom";
import resumePdf from "./resume.pdf";
import { useTheme } from "next-themes";

const Nav = ({ darkMode }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Text b h1 color="inherit" as={Link} to="/">
          Spencer Hamilton's Portfolio
        </Text>
      </Navbar.Brand>

      <Navbar.Content>
        <Navbar.Link href={resumePdf} target="_blank">
          Resume
        </Navbar.Link>
        <Navbar.Link>Contact</Navbar.Link>

        <Navbar.Item
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          <Switch
            checked={theme === "dark"}
            iconOff={<LightMode />}
            iconOn={<DarkMode />}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          ></Switch>
        </Navbar.Item>
        <Navbar.Link
          href="https://www.linkedin.com/in/spencerhamilton119"
          target="_blank"
        >
          <LinkedIn />
        </Navbar.Link>
        <Navbar.Link href="https://github.com/spencer119" target="_blank">
          <GitHub />
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default Nav;
