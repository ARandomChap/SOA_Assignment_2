const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
const cors = require('cors')
app.use(cors())

var path = require('path');
app.use(express.static(path.join(__dirname + 'public')));

// app.get('/public/index')

app.post('/electricity', function(req, res) {
    console.log(req.body);
    var electricDay = req.body.electricityDay;
    var electricLow = req.body.electricityLow;
    
    const unitDayRate = 0.11;
    const unitLowRate = 0.075;
    
    var costDay = unitDayRate * electricDay;
    var costLow = unitLowRate * electricLow;
    
    res.json(costDay || costLow);
});

const port = 8081;
app.listen(port, () => {
    console.log('Server listening on port: ' + port);
  });