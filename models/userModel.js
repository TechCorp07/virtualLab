const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
/*     user_id:
    {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    }, */
    username:
    {
        type: String,
        required: [true, "Please add the user name"],
    },
    name: 
    {
        type: String,
        required: [true, "Please add the name"],
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
        unique: [true, "Email address already taken"],
    },
    phone: 
    {
        type: String,
        required: [true, "Please add the user's phone number"],
    },
    password: 
    {
        type: String,
        required: [true, "Please add the user password"],
    },
},
    {
        timestamps: true,
    },
    { 
        _id: false 
    }
);

module.exports = mongoose.model("User", userSchema);
