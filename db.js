const mongoose = require("mongoose")

// const URL = 'mongodb://localhost'
const URL = 'mongodb+srv://chatAdmin:chatAdminPass@chatappralph.nctcw.mongodb.net/chat-app-ralph?retryWrites=true&w=majority'

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB CONNECTED")
}).catch(error =>  console.log(error))

module.exports = mongoose