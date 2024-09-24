const express = require('express');
const router = express.Router();
const License = require('../models/License');
const LicenseController = require('../Controllers/licenseController');
const { verifyApiKey } = require('../middlewares/authApiKey');
// Create a new License
router.post('/createLicense',verifyApiKey, LicenseController.createLicense);

// Get all Licenses
router.get('/',verifyApiKey,LicenseController.getLicenses);

module.exports = router;
