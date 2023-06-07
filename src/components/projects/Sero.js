import React from "react";
import {
  Card,
  Row,
  Text,
  Button,
  Spacer,
  Grid,
  Tooltip,
  Link,
} from "@nextui-org/react";
import seroimg from "../../images/sero-home.png";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
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
          sessions. By using bluetooth connected EMDR tappers, therapists can
          fully control, administer, and record EMDR therapy sessions remotely.
          The front end was built with React using Material UI. The backend
          utilized Firebase for it's cloud storage, authentication, hosting, and
          Firestore Database. Due to contract obligations, the source code is
          not available.
        </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="space-evenly">
          {/* <Button size="sm" light>
            Learn more
          </Button> */}
          <Tooltip content="Source code is private." placement="bottom">
            <Button
              as={Link}
              size="md"
              target="_blank"
              href="https://app.sero.health/"
              icon={<MedicalInformationIcon />}
            >
              Sero Health
            </Button>
          </Tooltip>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Sero;
