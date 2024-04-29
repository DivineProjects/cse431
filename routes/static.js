const express = require('express'); // importing express
const router = express.Router(); // express router functioality invoked

// Static Routes
// Set up "public" folder / subfolders for static files
router.use(express.static("public")); // this is where static resources will be found, with the public folder.
router.use("/css", express.static(__dirname + "public/css"));
router.use("/js", express.static(__dirname + "public/js"));
router.use("/images", express.static(__dirname + "public/images"));

module.exports = router;



