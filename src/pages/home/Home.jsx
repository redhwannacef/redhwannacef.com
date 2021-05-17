import React from "react";
import { Button, Card, Container, Grid, makeStyles } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import Link from "@material-ui/core/Link";
import { H3, H4, P } from "../../components/Typography";
import profile from "./profile.jpg";
import { Link as RouterLink } from "react-router-dom";
import { grey } from "@material-ui/core/colors";
import { ReactComponent as GeLogo } from "./resources/ge-logo.svg";
import { ReactComponent as SsLogo } from "./resources/ss-logo.svg";
import { ReactComponent as ModulrLogo } from "./resources/modulr-logo.svg";
import { ReactComponent as InsightsLogo } from "./resources/insights-logo.svg";
import QsLogo from "./resources/qikserve_logo.png";
import harryMackLogo from "./resources/harry-mack-logo.png";
import { useUtilityStyles } from "../../styles/utilities";
import Flow from "../../components/Flow";

const useStyles = makeStyles({
  logos: {
    marginTop: "0.5rem",
    marginBottom: "1rem",
    textAlign: "center",
    "& svg,img": {
      maxHeight: 50,
      maxWidth: 150,
    },
  },
  projects: {
    marginTop: "0.5rem",
  },
  projectImg: {
    border: `1px solid ${grey[300]}`,
    borderRadius: 12,
    padding: "0.5rem",
  },
  projectFlow: { "& > * + *": { marginTop: "0.5rem" } },
});

const Home = () => {
  const utilities = useUtilityStyles();
  return (
    <Flow className={utilities.heightFull}>
      <Navbar />
      <MainSection />
      <Companies />
      <Projects />
    </Flow>
  );
};

const MainSection = () => {
  return (
    <Container>
      <Grid container spacing={4} justify="space-around" alignItems="stretch">
        <Grid
          item
          xs={12}
          sm={6}
          container
          direction="column"
          justify="space-between"
          alignItems="flex-start"
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
          >
            Get in touch!
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
              borderRadius: "12px",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

const Companies = () => {
  const classes = useStyles();

  return (
    <Container>
      <P bold component="h2">
        Companies I've worked with
      </P>
      <Grid
        container
        justify="space-around"
        spacing={2}
        className={classes.logos}
      >
        {/* TODO: filter: greyscale then hover remove greyscale? */}
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
  );
};

const Projects = () => {
  const classes = useStyles();

  return (
    <Container>
      <P bold component="h2">
        Projects I've worked on
      </P>
      <Grid
        container
        justify="space-between"
        spacing={2}
        className={classes.projects}
      >
        <Grid item xs={4} md={3} className={classes.projectFlow}>
          <Card style={{ padding: "0 0.5rem", backgroundColor: "inherit" }}>
            <img
              src={harryMackLogo}
              style={{ maxWidth: "100%", filter: "invert(0.8)" }}
            />
          </Card>
          <Link
            style={{ display: "block" }}
            href="https://harrymackbars.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>harrymackbars.com</b>
          </Link>
          <P variant="subtitle2" bold>
            A Harry Mack search engine
          </P>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
