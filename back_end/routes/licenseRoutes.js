const express = require('express');
const router = express.Router();
const License = require('../models/licenseSchema');
const LicenseController = require('../Controllers/licenseController');
const { verifyApiKey } = require('../middlewares/authApiKey');
// Create a new License
router.post('/createLicense',verifyApiKey, LicenseController.createLicense);

// Get all Licenses
router.get('/licenseName',verifyApiKey,LicenseController.getLicenses);

router.get('/licenseDetails',verifyApiKey,LicenseController.getLicensesDetails);

module.exports = router;
