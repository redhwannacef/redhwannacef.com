import React from "react";
import { Container, Typography } from "@material-ui/core";
import Navbar from "../../components/Navbar";

const Home = () => (
  <>
    <Navbar />
    <Container maxWidth="xl">
      <Typography>Hello, world!</Typography>
    </Container>
  </>
);

export default Home;
