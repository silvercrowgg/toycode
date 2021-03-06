var http = require('http');

var app = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hello world');
});

app.listen(1723, function () {
  console.log('server is listening');
});


process.on('SIGINT', function () {
  console.log('closing');
  console.time('close');
  app.close(function () {
    console.log('closed');
    console.timeEnd('close');
    process.exit()
  });
});