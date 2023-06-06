import React from "react";
import { Grid, Card, Text, Row, Button, Spacer } from "@nextui-org/react";
import { GitHub } from "@mui/icons-material";
const Portfolio = () => {
  return (
    <Card isHoverable>
      <Card.Header>
        <Grid.Container>
          <Row>
            <Row>
              <Text b>Portfolio</Text>
            </Row>
            <Row justify="flex-end">
              <Text i size="$md">
                (This website)
              </Text>
            </Row>
          </Row>
          <Row>
            <Text i size="$sm">
              React web app
            </Text>
          </Row>
        </Grid.Container>
      </Card.Header>
      <Card.Divider />
      <Card.Body>
        <Card.Image height={350} src="https://via.placeholder.com/350" />
        <Spacer y={1} />
        <Text>
          This portfolio website. Buit using React and the NextUI library for UI
          design.
        </Text>
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

export default Portfolio;
