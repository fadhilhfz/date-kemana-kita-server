const db = require("../models/index");

async function getRandomIdea() {
  const randomIdea = await db.idea.findOne({
    include: [
      {
        model: db.fee,
        attributes: ["weekdays_fee", "weekend_fee", "single_fee"],
      },
      {
        model: db.image_url,
        attributes: ["url"],
      },
      {
        model: db.subcategory,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
    attributes: [
      "name",
      "category",
      "description",
      "latitude",
      "longitude",
      "ofc_web",
      "ofc_twt",
      "ofc_ig",
    ],
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
