const db = require("../models/index");

async function getRandomIdea() {
  const randomIdea = await db.idea.findOne({
    order: [db.sequelize.literal("RANDOM()")],
  });
  return randomIdea;
}

async function getIdeaById(uuidString) {
  try {
    const ideaById = await db.idea.findByPk(uuidString);
    return ideaById;
  } catch (e) {
    return {
      error: true,
      code: 404,
      message: `Error getting idea by ID: ${uuidString}`,
    };
  }
}

module.exports = {
  getRandomIdea,
  getIdeaById,
};
