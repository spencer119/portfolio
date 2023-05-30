import { Grid, Card, Text, Row, Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
const Projects = () => {
  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={4}>
          <Card>
            <Card.Header>
              <Text b>Portfolio</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body>
              <Card.Image src="https://via.placeholder.com/200" />
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
        </Grid>
        <Grid xs={4}>
          <Card></Card>
        </Grid>
        <Grid xs={4}>
          <Card>
            <Card.Body></Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Projects;