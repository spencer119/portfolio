import React from "react";
import { Card, Row, Text, Button, Spacer, Link, Grid } from "@nextui-org/react";
import { GitHub } from "@mui/icons-material";
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
        <Text>
          A recreation of the game Clue written in Java. The game allows 1-6
          human players with the remaining players being filled with AI
          controlled players. AI players are capable of making smart moves,
          informed suggestions, and accurate accusations against other players.
          The game features all the rules of the original game and allows for
          customization of the cards and game board.
        </Text>
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row justify="space-evenly">
          {/* <Button size="sm" light>
            Learn more
          </Button> */}
          <Button
            as={Link}
            size="md"
            icon={<GitHub />}
            href="https://github.com/spencer119/ClueGame"
            target="_blank"
          >
            GitHub
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default Clue;
