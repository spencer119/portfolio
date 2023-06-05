import React from "react";
import { Card, Row, Text, Button, Spacer, Grid } from "@nextui-org/react";
const SpellingBackend = () => {
  return (
    <Card isHoverable>
      <Card.Header>
        <Grid.Container>
          <Row>
            <Text b size="$lg">
              Backend for Spelling App
            </Text>
          </Row>
          <Row>
            <Text i size="$sm">
              Node.js REST API
            </Text>
          </Row>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Card.Image src="https://via.placeholder.com/350" height={350} />
        <Spacer y={1} />
        <Text></Text>
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

export default SpellingBackend;
