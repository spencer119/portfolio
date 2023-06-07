import React from "react";
import { Card, Row, Text, Button, Spacer, Grid, Link } from "@nextui-org/react";
import { GitHub } from "@mui/icons-material";
import spellingimg from "../../images/spelling.jpg";
const Spelling = () => {
  return (
    <Card>
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
        <Card.Image src={spellingimg} height={350} />
        <Spacer y={1} />
        <Text>
          An online spelling test platform developed for a local elementary
          school during the COVID-19 lockdowns. It allowed teachers to create
          spelling lists with accomponied audio, online student practice, and
          auto graded assessments. The frontend was built using React and the
          Bootstrap CSS framework. The backend was built using Node.js and
          Express.js. Additionally, user data and media files were stored in a
          MongoDB database.
        </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="space-evenly">
          <Button
            as={Link}
            size="md"
            icon={<GitHub />}
            target="_blank"
            href="https://github.com/spencer119/spelling-tests"
          >
            Frontend
          </Button>

          <Button
            as={Link}
            size="md"
            icon={<GitHub />}
            target="_blank"
            href="https://github.com/spencer119/spelling-tests-backend"
          >
            Backend API
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Spelling;
