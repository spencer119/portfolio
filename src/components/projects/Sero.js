import React from "react";
import { Card, Row, Text, Button, Spacer } from "@nextui-org/react";
import seroimg from "../../images/sero-session.png";
const Sero = () => {
  return (
    <Card>
      <Card.Header>
        <Text b>Sero Health</Text>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Card.Image src={seroimg} height={300} />
        <Spacer y={1} />
        <Text>Sero Health is an online platform for</Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="space-evenly">
          <Button size="sm" light>
            Learn more
          </Button>
          <Button size="sm">GitHub </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Sero;
