const express = require("express"); 
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 3000;

const userRouter = require("./routes/userRoutes")
app.use(express.json()); 
app.use("/api/users", userRouter);  //Middleware
app.use(errorHandler);

app.listen (port,() => 
{
    console.log(`Server Started at http://localhost:${port}`);
});
