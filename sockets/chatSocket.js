const axios = require("axios")

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log("user connected")
        socket.on("messages", (data) => {
            axios.post("http://localhost:8080/api/messages", data).then((res) => {
                axios.get("http://localhost:8080/api/messages").then((response) => {
                    io.sockets.emit("new message", response.data.chat)
                })
            })
        }) 
    })
} 