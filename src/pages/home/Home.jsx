import React from "react";
import { Container, Grid } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import Link from "@material-ui/core/Link";
import { H4 } from "../../components/Typography";

const Home = () => (
  <>
    <Navbar />
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <H4 bold gutterBottom>
            Hello 👋🏼
          </H4>
          <H4 gutterBottom>I'm Redhwan.</H4>
          <H4>
            I am a{" "}
            <Link
              href="https://github.com/redhwannacef"
              style={{ color: "#bf616a" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>Software Engineer</b>
            </Link>
          </H4>
          <H4>
            and aspiring{" "}
            <Link
              href="https://youtube.com/redhwannacef"
              style={{ color: "#bf616a" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>YouTuber</b>
            </Link>
          </H4>
        </Grid>
        <Grid />
      </Grid>
    </Container>
  </>
);

export default Home;
