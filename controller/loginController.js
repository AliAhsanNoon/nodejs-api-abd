const express = require("express");
const router = express.Router();

router.post("/auth", (req, res) => {
  const userName = "admin@admin.com";
  const password = "12345";
  if (req.body.userName === userName) {
    if (req.body.password === password) {
      res.json({ message: "LoggedIn Successfully", success: true });
    } else {
      res.json({ message: "Invalid Credentials", success: false });
    }
  } else {
    res.json({ message: "Invalid Credentials", success: false });
  }
});

module.exports = router;
