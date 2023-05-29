import { Button, Navbar, Text } from "@nextui-org/react";
import React from "react";
import { GitHub, LinkedIn, DarkMode } from "@mui/icons-material";

const Nav = () => {
  return (
    <Navbar variant="sticky">
      <Navbar.Brand>
        <Text b color="inherit">
          Portfolio
        </Text>
      </Navbar.Brand>

      <Navbar.Content>
        <Navbar.Link>Projects</Navbar.Link>
        <Navbar.Link href="../resume.pdf" target="_blank">
          Resume
        </Navbar.Link>
        <Navbar.Item>
          <DarkMode style={{ cursor: "pointer" }} />
        </Navbar.Item>
        <Navbar.Link>
          <LinkedIn />
        </Navbar.Link>
        <Navbar.Link>
          <GitHub />
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
  );
};

export default Nav;
