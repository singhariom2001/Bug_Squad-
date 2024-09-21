const express = require('express');
const router = express.Router();
const Bundle = require('../models/Bundle');
const bundleController = require('../Controllers/bundleController');

// Create a new Bundle
router.post('/',bundleController.createBundle);

// Get all Bundles
router.get('/', bundleController.getBundles);

module.exports = router;
