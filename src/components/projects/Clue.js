import React from "react";
import {
  Card,
  Row,
  Text,
  Button,
  Spacer,
  Container,
  Grid,
} from "@nextui-org/react";
import clueimg from "../../images/clue.png";
const Clue = () => {
  return (
    <Card isHoverable>
      <Card.Header>
        <Grid.Container>
          <Row>
            <Text b size="$lg">
              Clue Game
            </Text>
          </Row>
          <Row>
            <Text i size="$sm">
              Java game
            </Text>
          </Row>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Card.Image src={clueimg} height={350} />
        <Spacer y={1} />
        <Text>description </Text>
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

export default Clue;
