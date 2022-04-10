const router = require('express').Router();
const { getAllGames, getGameById, createGame } = require('../controller/gameController')

 
router.get('/', getAllGames)
router.get('/:id', getGameById)
router.post('/', createGame)


module.exports = router