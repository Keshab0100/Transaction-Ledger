const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");

const staticPath = path.join(__dirname, "/public");
const templatePath = path.join(__dirname, "/template/views");

app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/transaction", (req, res) => {
  res.render("tranc");
});

app.listen(port, () => {
  console.log("listening");
});

exports.app = functions.https.onRequest(app);
