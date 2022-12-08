const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connection");
require("dotenv").config({ path: "./.env" });

const app = express();

//middleware

app.use(express.json());

// routes

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
