// let hello = "Hello world";
// console.log(hello);
//const=var
const express = require('express');
const path = require('path');
const app = express(); //เรียกใช้express

//=>คือfunction
app.get('/',(req,res) =>{
    // res.sendFile('./contact.html')
    // console.log(path.join(__dirname));
    
    res.sendFile(path.join(__dirname)+'/index.html');

    // console.log(req);
    // res.send('ok');
})

app.get('/about1',(req,res) =>{
    res.sendFile(path.join(__dirname)+'/contact1.html');
})
app.get('/about2',(req,res) =>{
    res.sendFile(path.join(__dirname)+'/contact2.html');
})
app.get('/about3',(req,res) =>{
    res.sendFile(path.join(__dirname)+'/contact3.html');
})




app.listen(8080,()=>{
    console.log('backend with start 8080');
})

