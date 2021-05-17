import React, { useEffect, useState } from "react";
import { Container, IconButton, Snackbar, Tooltip } from "@material-ui/core";
import Navbar from "../../components/Navbar";
import { useUtilityStyles } from "../../styles/utilities";
import { H4, P } from "../../components/Typography";
import Button from "@material-ui/core/Button";
import {
  FileCopy,
  GitHub,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import ClipboardJS from "clipboard";
import Flow from "../../components/Flow";

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
      <Container className={utilities.flexGrow}>
        <Flow spacing={1} style={{ textAlign: "center", marginTop: "10rem" }}>
          <P bold>Feel free to email me at</P>
          <Tooltip title={<P bold>Copy</P>} placement="top-end" arrow>
            <Button
              id="button"
              variant="outlined"
              color="primary"
              style={{ borderWidth: "medium" }}
            >
              <H4 bold id="email">
                helloredhwan@gmail.com <FileCopy />
              </H4>
            </Button>
          </Tooltip>
          <P bold>or find me on</P>
          <div>
            <Tooltip title="YouTube" placement="bottom">
              <IconButton
                aria-label="YouTube"
                href="https://youtube.com/redhwannacef"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTube fontSize="large" color="primary" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Github" placement="bottom">
              <IconButton
                aria-label="Github"
                href="https://github.com/redhwannacef"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub fontSize="large" color="primary" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Twitter" placement="bottom">
              <IconButton
                aria-label="Twitter"
                href="https://twitter.com/redhwannacef"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter fontSize="large" color="primary" />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn" placement="bottom">
              <IconButton
                aria-label="LinkedIn"
                href="https://linkedin.com/in/redhwannacef"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn fontSize="large" color="primary" />
              </IconButton>
            </Tooltip>
          </div>
        </Flow>
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
