const express = require("express");
const tasks = require("./routes/tasks");

const app = express();

//middleware

app.use(express.json());

// routes

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}`));
