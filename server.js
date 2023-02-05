const db = require("./models/index");
const express = require("express");
const app = express();
const PORT = 3000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    // Perform database operations here
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.get("/", async (req, res) => {
  const randomIdea = await db.idea.findOne({
    order: [db.sequelize.literal("RANDOM()")],
  });
  // const plainIdeas = ideas.map((i) => i.toJSON());
  console.log(randomIdea);
  res.json(randomIdea);
});

app.listen(PORT, (req, res) => {
  console.log(`Server start at port ${PORT}`);
});
