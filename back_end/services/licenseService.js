
const License = require('../models/licenseSchema'); 
const Bundle = require('../models/bundleSchema'); 

async function createLicense(LicenseId, LicenseName, concurrency, books, bundleId, isPaid) {
    console.log("books",books)

    const originalBundle = await Bundle.findOne({ BundleId: bundleId });
    if (!originalBundle) {
        throw new Error('Bundle not found');
    }
     console.log("bundle", bundleId)
     let cnt=0;
  
    const copiedBooks = originalBundle.Books.map(book => ({
       
        ...book.toObject(),
        Concurrency: book.ispremium ? concurrency : 0  
    }));
    
    if (books && typeof books === 'object') {
        copiedBooks.forEach(book => {
            cnt++;
            
            // if(book.Bookid==="970346598-6")
            {
                console.log(typeof book.Bookid)
            }
            if (books[book.Bookid]) {
                console.log("hello")
               
                book.Concurrency = books[book.Bookid]; 
            }
        });
    }
    console.log("count",cnt)
  

   
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
    console.log("heelo")
    const licenses = await License.find({ LicenseName: licenseName});
    console.log(licenseName);

    return licenses;
}

async function getLicensesDetails(licenseId) {
    const licenses = await License.findOne({ LicenseId: licenseId});
    console.log("license",licenses);
    const books = licenses.Books;
    console.log("books",books);
    return books;
}
module.exports = {
    createLicense,getLicenses,getLicensesDetails
};
