const express = require("express");
// Hanbdle all the route parameters with ease
const router = express.Router();

router.get("/test", (req, res) => {
    res.send("test api route is working fine")
})

module.exports = router;