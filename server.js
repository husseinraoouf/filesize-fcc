var express = require('express');
var path = require('path');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res){
  res.sendFile('/views/index.html');
});

app.post('/get-file-size', upload.single('file'), function(req, res){
  res.json({"size": req.file.size});
});


var port = 8080;
app.listen(port, function() {
  console.log('server listening on port ' + port);
  console.log('https://freecodecamp-husseinraoouf.c9users.io');
});

