const express = require("express");
// Hanbdle all the route parameters with ease
const router = express.Router();

router.get("/test", (req, res) => {
    res.send("test api route is working fine")
})

// @route GET api/books
// @description Give all the books
// @access public
router.get("/", (req, res) => {
    // Book.find()
    // .then((books) => res.json(books))
    // .catch((err) => res.status(404).json({nobooksfound: "MongoDB couldn't find the details"}))
    res.json({ OK: "All Books route is working fine"})
});





module.exports = router;