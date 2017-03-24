var express     = require('express');
var path        = require('path');
var serveStatic = require('serve-static');

app = express();
app.use(serveStatic(__dirname));

var port = process.env.PORT || 3000;

app.listen(port);
console.log('TCAT Web live on port ' + port);
