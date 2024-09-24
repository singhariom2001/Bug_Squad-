const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');
const connectDB = require('./config/database');

// Import Routes
const bundleRoutes = require('./routes/bundleRoutes');
const licenseRoutes = require('./routes/licenseRoutes');


const Bundle = require('./models/Bundle');



// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

connectDB();
console.log("called")


// const bundles = [];

// fs.createReadStream('./Data/MOCK_DATA.csv')
//   .pipe(csv())
//   .on('data', (row) => {
//     // Create the book object
//     const book = {
//       Bookid: row['Book id'],
//       BookName: row['Book name'],
//       ispremium: row['is Premium'] === 'TRUE',  // Convert string 'TRUE'/'FALSE' to boolean
//     };
 
// //     // Check if bundle already exists
// const foundBundle = bundles.find(bundle => bundle.BundleId === parseInt(row['Bundle id']));
// const bundleId = foundBundle ? foundBundle.BundleId : null;
 
//     if (bundleId !== -1) {
//       // Bundle already exists, push the book to the existing Books array
//       bundles[bundleId].Books.push(book);
//     } else {
//       // Create a new bundle with this book
//       const newBundle = {
//         id: parseInt(row['id']),
//         BundleId: parseInt(row['Bundle id']),
//         BundleName: row['Bundle Name'],
//         Books: [book],  // Initialize the Books array with the current book
//       };
//       bundles.push(newBundle);
//     }
//   })
//   .on('end', async () => {
//     try {
//       // Insert all the bundles into the database
//       await Bundle.insertMany(bundles);
//       console.log('Bundles imported successfully!');
//     } catch (error) {
//       console.error('Error importing bundles:', error);
//     }
//   });

// Database connection
// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});
app.use('/api/bundles', bundleRoutes);
app.use('/api/licenses', licenseRoutes);

// Start the server
const PORT =  8000;
app.listen(8000, () => {
  console.log(`Server running on port ${PORT}`);
});
