import {createRequestHandler} from "@remix-run/express";
import * as express from "express";
import * as functions from "firebase-functions";

const app = express();
app.all("*", createRequestHandler({build: require("./lib")}));

export const remix = functions.https.onRequest(app);
