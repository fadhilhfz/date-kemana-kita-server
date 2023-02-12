const express = require("express");
const ideasRouter = express.Router();
const ideasController = require("../controllers/ideasController");

ideasRouter.get("/", async (req, res, next) => {
  const randomIdea = await ideasController.getRandomIdea();
  res.send(randomIdea);
});

ideasRouter.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const result = await ideasController.getIdeaById(id);
  if (result.error) return res.status(404).send(result);

  res.send(result);
});

// ideasRouter.get("/bogor", async (req, res, next) => {
//   const result = await ideasController.getKRB();
//   // if (result.error) return res.status(404).send(result);

//   res.send(result);
// });

module.exports = ideasRouter;
