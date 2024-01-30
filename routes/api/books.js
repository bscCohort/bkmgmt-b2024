const express = require("express");
// Hanbdle all the route parameters with ease
const router = express.Router();

router.get("/test", (req, res) => {
    res.send("test api route is working fine")
})

// @route GET api/books
// @description Give all the books
// @access public
// READ operation
router.get("/", (req, res) => {
    // Book.find()
    // .then((books) => res.json(books))
    // .catch((err) => res.status(404).json({nobooksfound: "MongoDB couldn't find the details"}))
    res.json({ OK: "All Books route is working fine"})
});

// @route GET api/books/:id
// @description Get single book details by searching for the ID
// @access Public
// READ and SEARCH operation
router.get("/:id", (req, res) => {
    // Book.findById(req.params.id)
    // .then((book) => res.json(book))
    // .catch((err) => res.status(404).json({ noBookFound: "Couldn't find this book"}))
    res.json({
        OK: "Get Book By Id route is working fine"
    })
})


// @route GET api/books/
// @description Save a new book
// @access Public
// CREATE operation
router.post("/", (req, res) => {
    // Book.create(req.params.id)
    // .then((book) => res.json({
    //     msg: "A new book was created successfully"
    // }))
    // .catch((err) => res.status(404).json({ 
    //     error: "Couldn't create this book"
    // }))
    res.json({
        OK: "Create book pag is working fine"
    })
})


// @route GET api/books/:id
// @description Find a book by its ID and update it
// @access Public
// READ, UPDATE, SEARCH operation
router.put("/:id", (req, res) => {
    // Book.findByIdAndUpdate(req.params.id, req.body)
    // .then((book) => res.json({
    //     msg: "This book was updated successfully"
    // }))
    // .catch((err) => res.status(400).json({ 
    //     error: "Couldn't update this book"
    // }))
    res.json({
        OK: "Update book by id page is working fine"
    })
})


// @route GET api/books/:id
// @description Find a book by its ID and delete it
// @access Public
// READ, DELETE, SEARCH operation
router.delete("/:id", (req, res) => {
    // Book.findByIdAndRemove(req.params.id, req.body)
    // .then((book) => res.json({
    //     msg: "This book was deleted successfully"
    // }))
    // .catch((err) => res.status(404).json({ 
    //     error: "Couldn't delete this book"
    // }))
    res.json({
        OK: "Update book by id page is working fine"
    })
})





module.exports = router;