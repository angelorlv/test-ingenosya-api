const express = require('express')
const app = express()
const port = 4641

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//Allow cross origin
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Ecoute pour les apis
app.use('/api',require('./routes/api.route'))

app.listen(port, () => {
})