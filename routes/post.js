const express = require('express');

const router = express.Router();

//creating task controller -- 
const createController = require('../controllers/post_controller');

router.post('/create-task',createController.create);


module.exports = router;