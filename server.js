const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");

app.get('/',(req, res) => 
{
    console.log('test');
    res.send('Hi')
})

const userRouter = require("./routes/users")

app.use("/users", userRouter);

app.listen (port,() => 
{
    console.log(`Server Started at http://localhost:${port}`);
});