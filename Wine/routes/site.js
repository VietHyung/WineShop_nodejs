const express = require('express');
const router = express.Router();

const siteController = require('../control/controllers/SiteController');

router.get('/about',siteController.about);
router.get('/',siteController.index);

module.exports = router;
