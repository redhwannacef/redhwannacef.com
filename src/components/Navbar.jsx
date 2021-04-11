import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: { justifyContent: "space-between" },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className={classes.toolbar}>
        <Link component={RouterLink} to="/" variant="h6" color="inherit">
          Redhwan Nacef
        </Link>
        <nav>
          <Button component={RouterLink} to="about">
            About
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
