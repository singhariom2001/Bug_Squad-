
const License = require('../models/licenseSchema'); 
const Bundle = require('../models/bundleSchema'); 

async function createLicense(LicenseId, LicenseName, concurrency, books, bundleId, isPaid) {

    const originalBundle = await Bundle.findOne({ BundleId: bundleId });
    if (!originalBundle) {
        throw new Error('Bundle not found');
    }
    const copiedBooks = originalBundle.Books.map(book => ({
       
        ...book.toObject(),
        Concurrency: book.ispremium ? concurrency : 0  
    }));
    
    if (books && typeof books === 'object') {
        copiedBooks.forEach(book => {
        
            if (books[book.Bookid]) {
               
                book.Concurrency = books[book.Bookid]; 
            }
        });
    }
    const license = new License({
        LicenseId,
        LicenseName,
        isPaid,
        Books: copiedBooks
    });

    await license.save();
    return license;
}

async function getLicenses(licenseName) {
    const licenses = await License.find({ LicenseName: licenseName});
    return licenses;
}

async function getLicensesDetails(licenseId,isPaid) {
    if(isPaid){
        const licenses = await License.findOne({ LicenseId: licenseId});
        const books = licenses.Books;
        return books;
    }
    else{
        const licenses = await License.findOne({ LicenseId: licenseId}); 
        const books = licenses.Books;
        const nonpremiumBooks = books.filter((book) => book.ispremium===false);
        return nonpremiumBooks;
    }
}
module.exports = {
    createLicense,getLicenses,getLicensesDetails
};
