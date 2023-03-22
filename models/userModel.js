const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: 
    {
        type: String,
        required: [true, "Please add the user's name"],
    },
    surname: 
    {
        type: String,
        required: [true, "Please add the user's surname"],
    },
    email: 
    {
        type: String,
        required: [true, "Please add the user's email adress"],
    },
    phone: 
    {
        type: String,
        required: [true, "Please add the user's phone number"],
    },
},
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
