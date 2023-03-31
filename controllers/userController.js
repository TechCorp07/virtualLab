const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@desc Get all users
//@route GET /api/users
//@access public
const getUsers = asyncHandler(async(req, res) =>
{
    const users = await user.find();
    res.status(200).json(users);
});

//@desc Create new user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async(req, res) =>
{
    console.log("The request body is :", req.body);
    const {username, name, surname, email, phone, password} = req.body; 
    if(!username || !name || !surname || !email || !phone || !password)
    {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }

    const userAvailable = await User.findOne({email});
    if(userAvailable)
    {
        res.status(400);
        throw new Error("User already registered!");
    }
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
        username,
        name,
        surname,
        email,
        phone,
        password: hashedPassword,
    });

    if(user) // user was created successfully
    {
        res.status(201).json({ _id: user.id, email: user.email });
    }
    else
    {
        res.status(400);
        throw new Error("User data not valid");
    }
});

//@desc login user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) =>
{
    const {email, password} = req.body;
    if(!email || !password)
    {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({ email });
    //compare password with hashed password
    if(user && (await bcrypt.compare(password, user.password)))
    {
        const accessToken = jwt.sign
        ({ 
            user: 
            {
                username: user.username,
                email: user.email,
                id: user.id,
            },
        }, process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
        );
        res.status(200).json({ accessToken })
    }
    else
    {
        res.status(401)
        throw new Error("Email or Password invalid");
    }
});

//@desc Current user info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) =>
{
    res.json(req.user);
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
    const user = await User.findById(req.params.id);
    if(!user)
    {
        res.status(404); // user not found
        throw new Error("User not found");
    }

    const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedUser);
});

//@desc Delete user
//@route DELETE /api/users/:id
//@access public
const deleteUser = asyncHandler(async(req, res) =>
{
    const user = await User.findById(req.params.id);
    if(!User)
    {
        res.status(404);
        throw new Error("Contact not found");
    }
    await User.remove();
    res.status(200).json(user);
});

module.exports = { 
    getUsers,
    getUser,
    registerUser,
    currentUser,
    loginUser,
    updateUser,
    deleteUser, 
};
