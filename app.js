const express = require("express");

const app = express();

// routes
app.get("/hello", (req, res) => {
  res.send("Hello World");
});

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}`));
