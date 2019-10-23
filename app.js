const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = socketIo(server); 

app.get('/', function(req, res) {
  res.send("hello world");
});

let clients = [];

io.on("connection", socket => {

  console.log("New client connected");
  clients.push(socket);
  socket.on("disconnect", () => console.log(`Client disconnected`));
  
  socket.on("user logged in", function(name) {
    console.log(`user logged in: ${name}`);
  });
  
  socket.on("client typed new message", function(msg) {
    console.log(`new message: ${msg.content}, from: ${msg.author}`);
    for (let client of clients) {
      client.emit("update chat", msg);
    }
  })
});


server.listen(4001, function() {
  console.log("server launched...")
});
