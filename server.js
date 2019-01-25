
const express = require('express')

let app= express();
let port = process.env.PORT | 5000;

app.get('/welcome/:user' , (req,res)=> res.send(`Welcome ${req.params.user}...`))

app.post('/getUser' , (req,res) => res.json({msg : 'Hello there... '}))

app.listen(port, ()=> console.log(`Server is running on ${port} ...  `))