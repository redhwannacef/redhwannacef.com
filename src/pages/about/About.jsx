import React from "react";
import { Container, Typography } from "@material-ui/core";
import Navbar from "../../components/Navbar";

const About = () => (
  <>
    <Navbar />
    <Container maxWidth="xl">
      <Typography>Hello, from the about page!</Typography>
    </Container>
  </>
);

export default About;
