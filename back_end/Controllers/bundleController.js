const Bundle = require('../models/bundleSchema');

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


// exports.getBundles = async (req, res) => {
//     try {
//         const bundles = await Bundle.find();
//         res.json(bundles);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };


exports.getBundles = async (req, res) => {
    try {
        const { BundleName } = req.body;

        // Find bundles that match the bundleName
        const bundles = await Bundle.find({ BundleName: BundleName });
        console.log("body",req.body)
        console.log("bundlename", BundleName);
        console.log("Bundles:", bundles);

        // If no bundle is found
        if (bundles.length === 0) {
            return res.status(404).json({ message: 'No bundles found with this name' });
        }

        // Loop through bundles to check for books
        let allPremiumBooks = [];

        bundles.forEach(bundle => {
            if (bundle.Books && bundle.Books.length > 0) {
                const premiumBooks = bundle.Books.filter((book) => book.ispremium);
                allPremiumBooks = allPremiumBooks.concat(premiumBooks);
            }
        });

        if (allPremiumBooks.length === 0) {
            return res.status(200).send('No premium books available in any of these bundles');
        }

        // Return the premium books
        res.status(200).json(allPremiumBooks);

    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// exports.getBundles = async (req, res) => {
//     try {
//         const {bundleName}=req.body;
//         const bundle=await Bundle.find({BundleName:bundleName});
//         console.log("bundlename",bundleName)
//         console.log("Bundle:", bundle);

//         if(!bundle)
//             res.status(500).json({ message: err.message });
//         if (!bundle.Books || bundle.Books.length === 0) {
//             return res.status(404).json({ message: 'No books found in this bundle' });
//         }

//         console.log("Books:", bundle.Books);

        
//         const premiumBooks = bundle.Books.filter((book) => book.ispremium);
//         if (premiumBooks.length === 0) {
//             return res.status(200).send('No premium books available in this bundle');
//           }
     
//           res.status(200).json(premiumBooks);
       
//     } catch (err) {
//         res.status(500).send('Server error');
//     }
// };
 
