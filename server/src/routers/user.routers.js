const express = require("express");
const router = express.Router();

const {regsiter, showData, deleteData} = require('../controllers/user.controllers');

const {isLoggedIn}  = require('../middlewares/user.middleware')

router.post("/regsiter",regsiter);
router.get("/showData",isLoggedIn, showData)
router.delete("/deleteData",isLoggedIn,deleteData)

module.exports = router; 