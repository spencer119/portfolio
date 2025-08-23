import React from "react";
import { Card, Row, Text, Spacer, Grid } from "@nextui-org/react";
import qualcommImg from "../../images/qualcomm.png";

const Qualcomm = () => {
  return (
    <Card isHoverable>
      <Card.Header>
        <Grid.Container>
          <Row>
            <Text b size="$lg">
              Qualcomm
            </Text>
          </Row>
          <Row>
            <Text i size="$sm">
              Software Engineer Intern
            </Text>
          </Row>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Card.Image src={qualcommImg} height={350} />
        <Spacer y={1} />
        <Text>
          During my internship, I collaborated within a small, agile team to build a user-friendly
          desktop application using Electron and TypeScript, providing a graphical interface for an
          existing command-line Python diagnostic tool. I engineered the Python backend to expose a
          dual communication interface: a FastAPI REST API for structured requests and a Socket.IO
          WebSocket for real-time client updates. Throughout the project, I served as a Scrum team
          leader, coordinated work in Jira, practiced disciplined Git workflows, and authored
          comprehensive internal documentation to support maintainability and onboarding.
        </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="center">
          <Text i>Unable to share</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Qualcomm;
