const express = require('express');

const router = express.Router();

//creating home controller -- home page of browser
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);
router.use('/create',require('./create'));


module.exports = router;