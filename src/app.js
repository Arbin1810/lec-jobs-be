const express = require("express");

const app = express();

const PORT = 5000;

//http://localhost:5000
app.get("/", (req, res) => {
  res.status(200).send("This is response from BE");
});

app.listen(PORT, () => {
  console.log("App is running on port" + PORT);
});
