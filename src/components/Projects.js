import { Grid, Card, Text, Row, Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import Sero from "./projects/Sero";
import Clue from "./projects/Clue";
import Portfolio from "./projects/Portfolio";
import Spelling from "./projects/Spelling";
import SpellingBackend from "./projects/SpellingBackend";
import Qualcomm from "./projects/Qualcomm";
const Projects = () => {
  return (
    <Grid.Container gap={4} justify="center">
      <Grid xs={12} sm={6} md={4}>
        <Qualcomm />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Sero />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Portfolio />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Spelling />
      </Grid>
      <Grid xs={12} sm={6} md={4}>
        <Clue />
      </Grid>
    </Grid.Container>
  );
};

export default Projects;
