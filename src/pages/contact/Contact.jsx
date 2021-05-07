import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  IconButton,
  Snackbar,
  Tooltip,
} from "@material-ui/core";
import Navbar from "../../components/Navbar";
import useUtilityStyles from "../../styles/utilities";
import { H3, H4, H6 } from "../../components/Typography";
import Button from "@material-ui/core/Button";
import { FileCopy, GitHub, Twitter, YouTube } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import ClipboardJS from "clipboard";

const Contact = () => {
  const utilities = useUtilityStyles();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const clipboard = new ClipboardJS("#button", {
      text: () => document.getElementById("email").innerText,
    });
    clipboard.on("success", () => {
      setCopied(true);
    });
    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Container maxWidth="md" className={utilities.flexGrow}>
        <Grid
          container
          direction="column"
          className={`${utilities.heightFull} ${utilities.flow}`}
          style={{ textAlign: "center", marginTop: "5rem" }}
        >
          <H4>Feel free to email me</H4>
          <Tooltip title={<H6>Copy</H6>} placement="top-end" arrow>
            <Button
              id="button"
              variant="outlined"
              color="primary"
              style={{ borderWidth: "medium" }}
            >
              <H3 bold id="email">
                helloredhwan@gmail.com <FileCopy fontSize="large" />
              </H3>
            </Button>
          </Tooltip>
          <H4>or find me on</H4>
          <div>
            <IconButton
              aria-label="twitter"
              href="https://youtube.com/redhwannacef"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube fontSize="large" color="primary" />
            </IconButton>
            <IconButton
              aria-label="twitter"
              href="https://github.com/redhwannacef"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub fontSize="large" color="primary" />
            </IconButton>
            <IconButton
              aria-label="twitter"
              href="https://twitter.com/redhwannacef"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter fontSize="large" color="primary" />
            </IconButton>
          </div>
        </Grid>
      </Container>
      <Snackbar
        open={copied}
        autoHideDuration={3000}
        onClose={() => setCopied(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={() => setCopied(false)}
          severity="success"
        >
          Copied!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;
