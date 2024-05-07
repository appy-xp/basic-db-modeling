import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("hellow");
});
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content: "Content joke 1",
    },
    {
      id: 2,
      title: "Joke 2",
      content: "Content joke 2",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "Content joke 3",
    },
    {
      id: 4,
      title: "Joke 4",
      content: "Content joke 4",
    },
    {
      id: 5,
      title: "Joke 5",
      content: "Content joke 5",
    },
  ];
  res.send(jokes);
});
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
