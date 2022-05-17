const express = require('express')
const { addTeam } = require('../controller/our_team.controller')
const router = express.Router()

router.post('/addemployee',addTeam)

module.exports = router