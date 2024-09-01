const express = require("express");
const app = express();
const userRoute = require("./src/routes/user");
const  connectMongoDBAndStartExpressServer = require("./connection");
const { logReqRes } = require("./src/middlewares");
const config = require("./config");

app.use(express.urlencoded({ extended: false }));
//Connecting to mongoDB

const connectionString = config.connectionString
const PORT = config.PORT
connectMongoDBAndStartExpressServer(connectionString,PORT)
.then(() => {
    console.log("Connected to MongoDB");
    //After connection is successfull we start our express server
    app.listen(PORT, () => {
      console.log(`Server up and running on port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error while connecting to mongoDB : ", error);
  });
  

//Middleware for logging every request that comes for express server
app.use(logReqRes("logs.log"));
app.use("/api/users", userRoute);
