const express = require("express");

// Initiating the app
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () =>
    console.log(`Server is running on port ${port}`)
);