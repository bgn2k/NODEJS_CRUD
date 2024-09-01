const mongoose = require("mongoose");
const express = require('express')
const app = express()
 const connectMongoDBAndStartExpressServer = async (url, PORT) => {
    return mongoose.connect(url)
    
}
module.exports = connectMongoDBAndStartExpressServer
