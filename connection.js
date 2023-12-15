const mongoose = require('mongoose')

async function ConnectMongo(url){
    const connect = mongoose.connect(url)
    .then(() =>{console.log("MongoDB Connected")})
    .catch((err) =>{console.log("Mongo Error ",err)})
    return connect
}

module.exports = {ConnectMongo,}