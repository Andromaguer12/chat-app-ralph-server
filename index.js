const app = require("express")()
const path = require("path")
const {mongoose} = require("./db");


// settings
// app.set("port", process.env.PORT || 8080)
app.use(require("express").json())

// realtime
const http = require("http").createServer(app)
const io = require('socket.io')(http)

// connect sockets
require("./sockets/chatSocket")(io)

http.listen(process.env.PORT || 8080, () => {
    console.log(`server in port ${process.env.PORT || 8080}`)
})

// routes
app.use('/api/messages', require("./routes/chats.messages"))
app.use('/api/users', require("./routes/users.table"))