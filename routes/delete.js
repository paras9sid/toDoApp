const express = require('express');

const router = express.Router();

//creating delete controller -- for deleting
const deleteController = require('../controllers/delete_controller');

router.get('/delete-task',deleteController.delete);


module.exports = router;