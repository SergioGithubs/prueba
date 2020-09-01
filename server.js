// var http = require("http");

// const port = process.env.PORT || 8080;

// http.createServer(function(request, response) {
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.write(process.version);
//   response.write(port);
//   response.end();
// }).listen(port);









// var express = require('express');
// var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
// var messages = [{
//   id: 1,
//   text: "Hola soy un mensaje",
//   author: "Carlos Azaustre"
// }];
// app.use(express.static('public'));
// app.get('/hello', function(req, res) {
//   res.send(process.version);
//   res.status(200).send("Hello World!");
// });
// io.on('connection', function(socket) {
//   console.log('Alguien se ha conectado con Sockets');
//   socket.emit('messages', messages);
//   socket.on('new-message', function(data) {
//     messages.push(data);
//     io.sockets.emit('messages', messages);
//   });
// });
// server.listen(8080, function() {
//   console.log("Servidor corriendo en http://localhost:8080");
// });











const port = process.env.PORT || 8080;
const httpsServer  = require('http')
httpsServer .createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Mundo");
  response.write(process.version);
  response.write("Puerto: " + port);
  response.end();
}).listen(port);

const WebSocket = require('ws')

// const wss = new WebSocket.Server({ server: httpsServer , port: 777 })
const wss = new WebSocket.Server({ server: httpsServer })

wss.on('connection', ws => {
  console.log(`Conected`);
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  })
  ws.send('ho!')
})













