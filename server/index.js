const expess = require('express');
const bodyParser = require('body-parser');
const item = require('database-mysql');

const app = express();

app.use(express.static(_dirname + '/../react-client/dist'));

app.get('/items', function(req, res){
  items.selectAll(function(err, data){
    if(err) {
    res.sendStatus(err);
  } else {
    res.json(data);
    }
  });
});
app.listen(3000, function(){
  conole.log('listening on port 300')
});
