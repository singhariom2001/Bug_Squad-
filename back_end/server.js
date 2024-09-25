const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");
const connectDB = require("./config/database");

const bundleRoutes = require("./routes/bundleRoutes");
const licenseRoutes = require("./routes/licenseRoutes");
const app = express();


app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/api/bundles", bundleRoutes);
app.use("/api/licenses", licenseRoutes);


const PORT = 8001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
