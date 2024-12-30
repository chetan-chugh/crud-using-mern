const express = require("express");
const router = express.Router();

const {regsiter, showData, deleteData, updateData} = require('../controllers/user.controllers');

const {isLoggedIn}  = require('../middlewares/user.middleware')

router.post("/regsiter",regsiter);
router.get("/showData",isLoggedIn, showData)
// router.get("/showData/:id", specificData)
router.delete("/deleteData/:id", deleteData)
router.put("/updateData/:id", updateData)

module.exports = router; 