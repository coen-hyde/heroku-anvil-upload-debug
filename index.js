var express = require('express')
  , app = express()
  , port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  var page = "<html>\
<body>\
<p>File which does not contain @:</p>\
<img src='/image.jpg' />\
<p>File which does contain @:</p>\
<img src='/image@2x.jpg' />\
</body>\
</html>"

  res.send(200, page);
});

app.listen(port);