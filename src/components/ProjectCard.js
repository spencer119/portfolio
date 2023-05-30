import React from "react";
import { Card, Row, Text, Button } from "@nextui-org/react";
const ProjectCard = () => {
  return (
    <Card>
      <Card.Header>
        <Text b>Test</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body></Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="space-evenly">
          <Button size="sm">Learn more</Button>
          <Button size="sm">GitHub </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;
