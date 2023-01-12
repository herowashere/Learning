const express = require("express");
// create an express app object by calling express function
const app = express();
const port = 3000;
// "/"--> root URL
// app.get will start listening to requests coming in as 
// get request
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.get("/home", function (req, res) {
  res.send("Welcome Home!");
});
// app.post will onloy give response when the input response is 
// a post request
app.post("/home", function (req, res) {
  res.send("Added ur details");
});

app.listen(port, function () {
  console.log("Example app listening on port:--> " + port);
});