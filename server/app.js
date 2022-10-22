const express = require('express')
const app = express()
const {connectToDb, getData} = require('./db')
app.use(express.json())

let db;

connectToDb(err =>{
    if(!err){
        app.listen(8080, ()=>{
            console.log('server is running in port 8080');
        })
        db = getData()
    }
})

app.get('/', (req, res)=>{

})

app.get('/completed', (req, res)=>{

    let tasks = []
    let task = {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        checked: false
    }
})

app.get('/notcompleted', (req, res)=>{
    
})

