const express = require("express");
const app = express();
const port = 3000;
var fs = require("fs");

app.get('/', (req, res) => {
    res.send('Hello There!');
})
app.get('/random', (req, res) => {
    let result = Math.random() * 100;

    res.send("Random: " + result.toFixed(0));
})

app.get('/saludo', function (req, res) {
    var nombre = req.query.nombre;
    res.send('<h1>Hola ' + nombre  + '</h1>');
  });

app.get('/jsonresp', (req, res) => {
    fs.readFile("./package.json", function(err, data){
        if(err) res.send(err);
        res.send(JSON.parse(data));
    })

})

app.listen(port, () => {
    console.log('Example server listening on port ' + port);
    console.log('Enter http://localhost:' + port + ' on your browser')
})

// First things first, this won't work. It's your job to fix it
// Just a clue, that variable called express is a module, so you need to bring it in.
// If only there was some kind of MANAGER for that ;) (make sure you save it though)

// Once the server is working, add a new route, called "/random" that
// sends out a random number between 0 and 100 as a response.

// ******BONUS POINTS*******
// Add 2 other routes, one that does whatever you want, and another one
// that load up a JSON file from the server (if you don't know what that is, Google it)
// and sends the content as a string (little tip, theres a Js method for that)
