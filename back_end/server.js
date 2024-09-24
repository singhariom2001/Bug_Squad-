const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require("fs");
const csv = require("csv-parser");
const cors = require("cors");
const connectDB = require("./config/database");

// Import Routes
const bundleRoutes = require("./routes/bundleRoutes");
const licenseRoutes = require("./routes/licenseRoutes");

const Bundle = require("./models/bundleSchema");

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

connectDB();
console.log("called");

const bundles = [];


// fs.createReadStream('./Data/MOCK_DATA.csv')
//   .pipe(csv())
//   .on('data', (row) => {
//     // Create the book object
//     const book = {
//       Bookid: row['Book id'],  // Keep it as string
//       BookName: row['Book name'],
//       ispremium: row['is Premium'] === 'TRUE',  // Convert string 'TRUE'/'FALSE' to boolean
//     };

//     // Check if bundle already exists by comparing string BundleId
//     const bundleIndex = bundles.findIndex(bundle => bundle.BundleId === row['Bundle id']);

//     if (bundleIndex !== -1) {
//       // Bundle already exists, push the book to the existing Books array
//       bundles[bundleIndex].Books.push(book);
//     } else {
//       // Create a new bundle with this book
//       const newBundle = {
//         id: row['id'],  // Keep this as a string if that's how it's in the CSV
//         BundleId: row['Bundle id'],  // Keep as string
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
//     } finally {
//       process.exit();
//     }
//   });


// Database connection
// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/api/bundles", bundleRoutes);
app.use("/api/licenses", licenseRoutes);

// Start the server
const PORT = 8000;
app.listen(8000, () => {
  console.log(`Server running on port ${PORT}`);
});
