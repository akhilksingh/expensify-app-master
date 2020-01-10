const express = require('express');
const path = require('path');
const app = express();//express application
const publicPath = path.join(__dirname,'..','public');
const port = process.env.PORT || 3000;
//Adding the files that we wish to serve on the server
app.use(express.static(publicPath));

app.get('*',(req,res)=>{
 res.sendFile(path.join(publicPath,'index.html'));
});

//To start the server
app.listen(port,()=>{
    console.log('Server is up');
});