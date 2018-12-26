const router = require("express").Router();

// 
const bookRoutes = require("./books");
router.use("/books", bookRoutes);

// routes
require("./api-routes.js")(router);

module.exports = router;
