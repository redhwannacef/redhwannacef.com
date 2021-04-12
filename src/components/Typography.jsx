import React from "react";
import { Typography } from "@material-ui/core";

export const H1 = (props) => <Text variant="h1" {...props} />;
export const H2 = (props) => <Text variant="h2" {...props} />;
export const H3 = (props) => <Text variant="h3" {...props} />;
export const H4 = (props) => <Text variant="h4" {...props} />;
export const H5 = (props) => <Text variant="h5" {...props} />;
export const H6 = (props) => <Text variant="h6" {...props} />;
export const P = (props) => <Text variant="body1" {...props} />;

const Text = ({ bold = false, children, ...props }) => (
  <Typography {...props}>{bold ? <b>{children}</b> : children}</Typography>
);
