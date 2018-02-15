const express = require('express');
const bodyParser = require('body-parser');
const item = require('mysql');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function(req, res){
  items.selectAll(function(err, data){
    if(err) {
    res.sendStatus(err);
  } else {
    res.json(data);
    }
  });
});
app.listen(3000, function(){
  console.log('listening on port 3000')
});
