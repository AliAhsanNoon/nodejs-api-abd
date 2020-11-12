const express = require("express");
const router = express.Router();

router.use("/login", require("../controller/loginController"));
router.use("/file", require("../controller/fileUploadController"));

module.exports = router;
