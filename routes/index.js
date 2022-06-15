const express = require('express');

const router = express.Router();

//creating home controller -- home page of browser
const homeController = require('../controllers/home_controller');
router.get('/',homeController.home);

//creating another controller for deleting task
router.use('/post',require('./post'));
router.use('/',require('./delete'));


module.exports = router;