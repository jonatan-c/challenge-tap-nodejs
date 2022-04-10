const db = require("../../models/index");
const { getState } = require("../constants/state");

const getAllGames = async (req, res) => {
  try {
    let searGames = await db.Game.findAll();
    if (!searGames) {
      return res.status(404).json({
        message: "No games found",
      });
    }
    searGames.state = searGames.map((game) => {
      game.state = getState(game.state);
    });
    return res.status(200).json({ game: searGames });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating game",
    });
  }
};

const getGameById = async (req, res) => {
  try {
    const { id } = req.params;
    const searGames = await db.Game.findOne({
      where: {
        id,
      },
    });
    if (!searGames) {
      let newGame = await db.Game.create({
        cells: "",
        state: 1,
      });
      newGame.state = getState(newGame.state);
      return res.status(200).json({ game: newGame });
    }
    searGames.state = getState(searGames.state);
    return res.status(200).json({ game: searGames });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating game",
    });
  }
};

const createGame = async (req, res) => {
  try {
    const { cells, state } = req.body;
    let newGame = await db.Game.create({
      cells,
      state,
    });
    newGame.state = getState(newGame.state);
    return res.status(200).json({ game: newGame });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating game",
    });
  }
};

module.exports = {
  getAllGames,
  getGameById,
  createGame,
};
