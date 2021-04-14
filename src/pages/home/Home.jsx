import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import Link from "@material-ui/core/Link";
import { H4 } from "../../components/Typography";
import profile from "./profile.jpg";

const Home = () => (
  <>
    <Navbar />
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Grid container spacing={4} justify="space-between" alignItems="stretch">
        <Grid
          item
          xs={12}
          sm={6}
          container
          direction="column"
          justify="space-between"
        >
          <H4 bold gutterBottom>
            Hello 👋🏼
          </H4>
          <H4 gutterBottom>I'm Redhwan.</H4>
          <div>
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
            <H4 gutterBottom>
              and aspiring{" "}
              <Link
                href="https://youtube.com/redhwannacef"
                style={{ color: "#bf616a" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <b>YouTuber</b>
              </Link>
              .
            </H4>
          </div>
          <Button variant="contained" color="primary" fullWidth>
            Get in touch!
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} style={{ maxHeight: "320px" }}>
          <img
            src={profile}
            alt="Profile Picture"
            width="100%"
            height="100%"
            style={{
              height: "100%",
              borderRadius: "10px",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  </>
);

export default Home;
