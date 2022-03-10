const app = require("express")()
const path = require("path")
const {mongoose} = require("./db");
const cors = require("cors")


// settings
app.use(cors({
    origin: "https://chat-app-ralph.web.app/login",
    methods: ["GET", "POST"]

}))
app.use(require("express").json())

// realtime
const http = require("http").createServer(app)
const io = require('socket.io')(http, {
    cors: {
        origin: "https://chat-app-ralph.web.app",
        methods: ["GET", "POST"]
    }
})

// connect sockets
require("./sockets/chatSocket")(io)

http.listen(process.env.PORT || 8080, () => {
    console.log(`server in port ${process.env.PORT || 8080}`)
})

// routes
app.use('/api/messages', require("./routes/chats.messages"))
app.use('/api/users', require("./routes/users.table"))