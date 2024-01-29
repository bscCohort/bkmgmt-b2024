const express = require("express");
const connectDB =  require("./config/db");
const cors = require("cors");
const books = require("./routes/api/books");

// CONNECINGTO MONGODB
// connectDB();



// Initiating the app
const app = express();

// Enabling CORS here for safety of access of info from other domains
app.use(cors());
// Handle JSON parsing properly
app.use(express.json({
    extended: false
}))
// Use the API group instead of multiple paths for multiple routes
app.use("/api/books", books)

const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
);