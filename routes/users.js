const express = require("express");
const router = express.Router()

router.get("/", (req, res) =>
{
    res.send("Users List") // list all system users
})

router.get("/new", (req, res) =>
{
    res.send("Users New Form") // create new user
})

router.post('/', (req, res) =>
{
    res.send('Create User');
})

module.exports = router