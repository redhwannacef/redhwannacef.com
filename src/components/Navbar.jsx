import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import { Container, Link } from "@material-ui/core";

const useStyles = makeStyles({
  toolbar: { justifyContent: "space-between" },
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="md">
        <Toolbar className={classes.toolbar} disableGutters>
          <Link component={RouterLink} to="/" variant="h6" color="primary">
            <b>Redhwan Nacef</b>
          </Link>
          <nav>
            <Button component={RouterLink} to="/contact">
              Contact
            </Button>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
