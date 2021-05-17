import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  flow: (props) => ({
    "& > * + *": {
      marginTop: `${props.spacing}rem`,
    },
  }),
});

const Flow = ({ spacing = 2, className, ...props }) => {
  const classes = useStyles({ spacing });
  return <div className={`${className} ${classes.flow}`} {...props} />;
};

export default Flow;
