//Imports
const express = require('express');
const app = express();      
const port = 8000;


//Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));



app.get('/', (req, res) => {        
    res.sendFile(__dirname + '/views/index.html');
});


//Listen on Port
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

