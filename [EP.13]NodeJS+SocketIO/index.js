const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = 5000;

app.use(express.static(__dirname + "/public"));

app.get("/", () => {
  res.sendFile(_dirname + "/index.html");
});

// io.on("connect", (socket) => {
//   //!การเชื่อมต่อของ user
//   console.log("user connected");
//   socket.on("chat message", (msg) => {
//     io.emit("chat message", msg);
//   });
//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });

io.on("connect", (socket) => {
  socket.on("newuser", (name) => {
    let newUser = name;
    console.log(` ${newUser} : connected`);

    socket.on("disconnect", () => {
      console.log("user disconnected");
      io.emit("disconnect", `${newUser} disconnected`);
    });
  });
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
