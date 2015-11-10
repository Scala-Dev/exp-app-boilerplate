var connect = require('connect');
var serveStatic = require('serve-static');
connect()
.use('/node_modules', serveStatic(__dirname + '/node_modules'))
.use('/basic', serveStatic(__dirname + '/basic'))
.use('/static', serveStatic(__dirname + '/static'))
.use(serveStatic(__dirname + '/player'))
.listen(3000, function(){
  console.log('listening on port 3000, visit http://localhost:3000/index.html');
});
