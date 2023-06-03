import React from "react";
import { Card, Row, Text, Button, Spacer, Grid } from "@nextui-org/react";
import seroimg from "../../images/sero-home.png";
const Sero = () => {
  return (
    <Card isHoverable>
      <Card.Header>
        <Grid.Container>
          <Row>
            <Text b size="$lg">
              Sero Health
            </Text>
          </Row>
          <Row>
            <Text i size="$sm">
              Full stack React app
            </Text>
          </Row>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Card.Image src={seroimg} height={350} />
        <Spacer y={1} />
        <Text>
          Sero Health is an online therapy platform for remote EMDR therapy
          sessions.
        </Text>
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
