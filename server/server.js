const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here
let allGuesses =[];
let number = Math.floor(Math.random() * 26 +1);



    
    
    console.log(number);





app.post('/guess', (req, res)=>{
  console.log('Guessing game');
  
  let playerGuesses = req.body;
  allGuesses.push(playerGuesses);

  res.sendStatus(201);
  console.log(allGuesses);
});

app.get('/guess', (req, res)=> {
  console.log('server side GET');
  res.send(allGuesses);
});









app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
