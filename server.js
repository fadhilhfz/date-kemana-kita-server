const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const ideasRouter = require("./routes/ideasRoute");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/ideas", ideasRouter);

app.listen(PORT, () => {
  console.log(`Server start at port ${PORT}`);
});
