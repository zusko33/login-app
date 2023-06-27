import express from "express";
import path from "path";

const PORT = process.env.PORT || 3030;
const app = express();

app.get("/", (req, res) => {
  const dirName = path.dirname(new URL(import.meta.url).pathname);
  res.sendFile(path.join(dirName, "index.html"));
});

app.get("/login", function (req, res) {
  //   console.log("serving contact.html...");
  const dirName = path.dirname(new URL(import.meta.url).pathname);
  res.sendFile(path.join(dirName, "login.html"));
});
app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
});
