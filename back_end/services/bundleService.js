
const Bundle=require('../models/bundleSchema')

async function getBundles (BundleName)
{
    const bundles = await Bundle.find({ BundleName: BundleName });
  
    console.log("bundlename", BundleName);
    console.log("Bundles:", bundles);

    if (bundles.length === 0) {
        return res.status(404).json({ message: 'No bundles found with this name' });
    }

  
    let allPremiumBooks = [];

    bundles.forEach(bundle => {
        if (bundle.Books && bundle.Books.length > 0) {
            const premiumBooks = bundle.Books.filter((book) => book.ispremium);
            allPremiumBooks = allPremiumBooks.concat(premiumBooks);
        }
    });
    return allPremiumBooks;



}

module.exports={getBundles}