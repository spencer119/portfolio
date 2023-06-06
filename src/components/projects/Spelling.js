import React from "react";
import { Card, Row, Text, Button, Spacer, Grid } from "@nextui-org/react";
import { GitHub } from "@mui/icons-material";
const Spelling = () => {
  return (
    <Card isHoverable>
      <Card.Header>
        <Grid.Container>
          <Row>
            <Text b size="$lg">
              Elementary School Spelling Platform
            </Text>
          </Row>
          <Row>
            <Text i size="$sm">
              Full stack React app with Node.js REST API backend
            </Text>
          </Row>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Card.Image src="https://via.placeholder.com/350" height={350} />
        <Spacer y={1} />
        <Text>c </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="space-evenly">
          {/* <Button size="sm" light>
            Learn more
          </Button> */}
          <Button size="md" icon={<GitHub />}>
            GitHub
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Spelling;
