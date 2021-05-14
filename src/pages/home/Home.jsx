import React from "react";
import { Button, Container, Grid, makeStyles } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import Link from "@material-ui/core/Link";
import { H3, H4, P, Span } from "../../components/Typography";
import profile from "./profile.jpg";
import { Link as RouterLink } from "react-router-dom";
import { grey } from "@material-ui/core/colors";
import { ReactComponent as GeLogo } from "./resources/ge-logo.svg";
import { ReactComponent as SsLogo } from "./resources/ss-logo.svg";
import { ReactComponent as ModulrLogo } from "./resources/modulr-logo.svg";
import { ReactComponent as InsightsLogo } from "./resources/insights-logo.svg";
import QsLogo from "./resources/qikserve_logo.png";

const useStyles = makeStyles({
  logos: {
    marginTop: "1rem",
    marginBottom: "1rem",
    overflowX: "auto",
    textAlign: "center",
    "& svg,img": {
      maxHeight: 50,
      maxWidth: 200,
    },
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container
        maxWidth="md"
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      >
        <Grid
          container
          spacing={4}
          justify="space-between"
          alignItems="stretch"
        >
          <Grid
            item
            xs={12}
            sm={6}
            container
            direction="column"
            justify="space-between"
          >
            <H3 bold gutterBottom>
              Hello 👋🏼
            </H3>
            <H4 gutterBottom>I'm Redhwan.</H4>
            <div>
              <H4>
                I am a{" "}
                <Link
                  href="https://github.com/redhwannacef"
                  color="primary"
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
                  color="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <b>YouTuber</b>
                </Link>
                .
              </H4>
            </div>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              color="primary"
              fullWidth
            >
              <Span variant="h5" bold>
                Get in touch!
              </Span>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} style={{ maxHeight: "333px" }}>
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
      <div style={{ backgroundColor: grey[200] }}>
        <Container
          maxWidth="md"
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <P bold component="h2">Companies I've worked with</P>
          <Grid
            container
            justify="space-around"
            spacing={2}
            className={classes.logos}
          >
            <Grid item xs={3} md="auto">
              <GeLogo />
            </Grid>
            <Grid item xs={6} md="auto">
              <SsLogo />
            </Grid>
            <Grid item xs={3} md="auto">
              <img alt="QikServe" src={QsLogo} />
            </Grid>
            <Grid item xs={6} md="auto">
              <ModulrLogo />
            </Grid>
            <Grid item xs={6} md="auto">
              <InsightsLogo />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Home;
