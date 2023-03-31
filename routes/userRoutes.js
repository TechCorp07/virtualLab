const express = require("express");
const router = express.Router();
const { 
    getUser, 
    getUsers, 
    registerUser,
    currentUser,
    loginUser,
    updateUser, 
    deleteUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.get("/current", validateToken, currentUser);
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router
