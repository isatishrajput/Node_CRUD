const fs = require('fs')

function logReqRes(filename){
    return ( req,res, next) =>{
        console.log("Hello Message from middleware2")
        fs.appendFile(filename, `${Date.now()} : ${req.method} : ${req.path}\n`, 
        (err,data) =>
        {
            next();
        })
    }
}

module.exports = {logReqRes}