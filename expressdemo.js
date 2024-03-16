const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/kudb')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log("error in db connection" +err);
})

//import models
const usermodel = require('./models/users');


app.use(express.static('public'))
app.use(express.static('files'))

app.get('/home', (req, res) => {
  res.sendFile(__dirname+"/home.html")
})
app.get('/about', (req, res) => {
    res.sendFile(__dirname+"/about.html")
})
app.get('/contact', (req, res) => {
    res.sendFile(__dirname+"/contact.html")
})
app.get('/help', (req, res) => {
    res.sendFile(__dirname+"/help.html")
})



app.get('/cake', (req, res) => {
    res.send("i am cake!")
})
app.get('/cake/ahmedabad', (req, res) => {
    res.send("i am cake from ahmedabad!")
})
app.get('/cake/surat', (req, res) => {
    res.send("i am cake from Surat!")
})
app.get('/product/:id', (req, res) => {
    var id = req.params.id;
    res.send("id is " + id)
})




app.get('/search/', (req, res) => {
    var id = req.query.q;
    res.send("sorry " + id + " is not found!")
})



app.get('/product/:id', (req, res) => {
    var id = req.params.id;
    res.send("id is " + id)
})


app.get('/process/', (req, res) => {
    var txt1 = parseInt(req.query.txt1);
    var txt2 = parseInt(req.query.txt1);
    var txt3 = txt1 + txt2;
    res.send(`the value of NO.1 is ${txt1} and the value of NO.2 is ${txt2} and the sum is ${txt3}`)
})




app.get('/adddata/', (req, res) => {
    var userdata = {
        'uname' : "dhruvil",
        'ugender' : "Male"
    }

    //adddata
    usermodel.create(userdata)
    .then(() => {
        console.log("record added successfully!")
    })
    .catch((err) => {
        console.log("Error "+err)
    })
    res.send("record added successfully!")
})


app.get('/display', (req, res) => {
    usermodel.find()
    .then(() => {
        res.json(data)
    })
    .catch((err) => {
        console.log("Error "+err)
    })
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})