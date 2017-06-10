var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var multer  = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

var app = express();


var hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');



app.get('/', function(req, res){
  res.render('home');
});

app.post('/get-file-size', upload.single('file'), function(req, res){
  res.json({"size": req.file.size});
});


var port = process.argv[2];

app.listen(port, function() {
  console.log('server listening on port ' + port);
});
