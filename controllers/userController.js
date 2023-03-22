const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
//@desc Get all users
//@route GET /api/users
//@access public
const getUsers = asyncHandler(async(req, res) =>
{
    const users = await user.find();
    res.status(200).json(users);
});

//@desc Create new user
//@route POST /api/users
//@access public
const createUser = asyncHandler(async(req, res) =>
{
    console.log("The request body is :", req.body);
    const {name, surname, email, phone} = req.body; //password
    if(!name || !surname || !email || !phone) // will add password or any other field here
    {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const user = await userModel.create({
        name,
        surname,
        email,
        phone,
    });
    res.status(201).json({ message: "Create new user"});
});

//@desc Get user
//@route GET /api/users/:id
//@access public
const getUser = asyncHandler(async(req, res) =>
{
    const user = await User.findById(req.params.id);
    if(!user)
    {
        res.status(404); // user not found
        throw new Error("User not found");
    }
    res.status(200).json(user);
});

//@desc Update user
//@route PUT /api/users/:id
//@access public
const updateUser = asyncHandler(async(req, res) =>
{
    res.status(200).json({ message: `Update User for ${req.params.id}`});
});

//@desc Delete user
//@route DELETE /api/users/:id
//@access public
const deleteUser = asyncHandler(async(req, res) =>
{
    res.status(200).json({ message: `Delete User for ${req.params.id}`});
});

module.exports = { 
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser, 
};
