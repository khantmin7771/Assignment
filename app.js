const express = require('express');

const app = express();

const port = 1998;

app.listen(1998,()=>{

   console.log('Server starting up at: port : 1998:');

})
app.get('',(req,res)=>{
    res.send('<h1>My Application are firstpage,secondpage,thirdpage,fourthpage.</h1>');
})
app.get('/firstpage',(req,res)=>{
    res.sendFile(__dirname +'/firstpage.html');
})
app.get('/secondpage',(req,res)=>{
    res.sendFile(__dirname +'/secondpage.html');
})
app.get('/thirdpage',(req,res)=>{
    res.sendFile(__dirname + '/thirdpage.html');
})
app.get('/fourthpage',(req,res)=>{
    res.sendFile(__dirname + '/fourthpage.html');
})


