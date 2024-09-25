const licenseService = require('../services/licenseService'); 

exports.createLicense = async (req, res) => {
    const { License_id, License_name, concurrency, books, bundleId,isPaid } = req.body;

    try {
        const license = await licenseService.createLicense(License_id, License_name, concurrency, books, bundleId,isPaid);
        res.status(201).json(license);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getLicenses = async (req, res) => {
    const {LicenseName}=req.body;
    console.log("body",req.body);
    try {
        const licenses = await licenseService.getLicenses(LicenseName);
        console.log(1);
        console.log(LicenseName);
        res.status(201).json(licenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getLicensesDetails = async (req, res) => {
    const {LicenseId,isPaid}=req.body;
   
    try {
        const licenses = await licenseService.getLicensesDetails(LicenseId,isPaid);
     
        res.status(201).json(licenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
