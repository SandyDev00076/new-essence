import * as v2 from "firebase-functions/v2";
import callAI from "./utils/callAI.js";
import { log, error } from "firebase-functions/logger";

export const bpmeaning = v2.https.onRequest({ cors: true }, (req, res) => {
  if (req.method === "GET") {
    res.status(400).send("It has to be a POST request");
    return;
  }

  const { prompt } = req.body || {};
  if (!prompt) {
    res.status(400).send("prompt has to be non null");
    return;
  }

  log(`prompt recieved - `);
  callAI(prompt)
    .then((data) => res.send({ sections: data?.sections }))
    .catch((e) => {
      error(e);
      res.status(500).send("Error occurred while making OpenAI call");
    });
});
