const express = require("express");
const router = express.Router();

const {regsiter, showData, deleteData, specificData} = require('../controllers/user.controllers');

const {isLoggedIn}  = require('../middlewares/user.middleware')

router.post("/regsiter",regsiter);
router.get("/showData",isLoggedIn, showData)
router.get("/showData/:id", specificData)
router.delete("/deleteData",isLoggedIn,deleteData)

module.exports = router; 