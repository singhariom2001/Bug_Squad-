const Bundle = require('../models/Bundle');

// Create a new bundle
exports.createBundle = async (req, res) => {
    const { id, bundle_id, isPremium, books } = req.body;

    try {
        const bundle = new Bundle({
            id,
            bundle_id,
            isPremium,
            books
        });

        await bundle.save();
        res.status(201).json(bundle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.getBundles = async (req, res) => {
    try {
        const bundles = await Bundle.find();
        res.json(bundles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
