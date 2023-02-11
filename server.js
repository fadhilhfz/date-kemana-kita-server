const express = require("express");
const db = require("./models/index");
const ideasRouter = require("./routes/ideasRoute");
const app = express();
const PORT = 3000;

app.use("/ideas", ideasRouter);

app.listen(PORT, () => {
  console.log(`Server start at port ${PORT}`);
});
