const Bundle = require('../models/bundleSchema');

const bundleService=require('../services/bundleService')
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
    
        const { BundleName } = req.body;
        
        
        const bundles = await bundleService.getBundles(BundleName);
        try{
            if (bundles.length === 0) {
                return res.status(404).json({ message: 'No bundles found with this name' });
            }
            return res.status(200).json(bundles)
        }
        catch(err)
        {
            console.error(err);
            return res.status(500).send('Serve error');
        }

    } 




 
