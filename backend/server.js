import express from "express";
import db from "./database.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  const todos = db.prepare("SELECT * FROM todos").all([]);
  res.send(todos);
});

app.get("/todos", (req, res) => {
  const todos = db.prepare("SELECT * FROM todos").all();
  res.send(todos);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
