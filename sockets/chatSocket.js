const axios = require("axios")

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log("user connected")
        socket.on("messages", (data) => {
            axios.post("https://chat-app-ralph.herokuapp.com/api/messages", data).then((res) => {
                axios.get("https://chat-app-ralph.herokuapp.com/api/messages").then((response) => {
                    io.sockets.emit("new message", response.data.chat)
                })
            })
        }) 
    })
} 