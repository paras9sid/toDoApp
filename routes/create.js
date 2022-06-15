const express = require('express');

const router = express.Router();

//creating task controller -- for creation of task
const createController = require('../controllers/create_controller');

router.post('/create-task',createController.createTask);


module.exports = router;