const express = require('express')
const app = express()
const {connectToDb, getData} = require('./db')
app.use(express.json())

let db;

connectToDb(err =>{
    if(!err){
        app.listen(5000, ()=>{
            console.log('server is running in port 5000');
        })
        db = getData()
    }
})


