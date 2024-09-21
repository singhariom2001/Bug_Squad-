const License = require('../models/License');

// Create new license
exports.createLicense = async (req, res) => {
    const { License_id, License_name, cunccurency } = req.body;

    try {
        const license = new License({
            License_id,
            License_name,
            cunccurency
        });

        await license.save();
        res.status(201).json(license);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all licenses
exports.getLicenses = async (req, res) => {
    try {
        const licenses = await License.find();
        res.json(licenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
