const express = require("express");

const router = express.Router();

const Model = require("../schemas/messages")

router.get("/", async (req, res) => {
    const query = await Model.find()
    if(Array.from(query).length > 0){
        res.json({
            chat: query
        })
    }
    else{
        res.send("No data")
    }
})

router.post('/', async (req, res) => {
    const { content, sender, timestamp } = req.body
    const builtMessage = new Model({
        content,
        sender,
        timestamp
    })
    const saving = await builtMessage.save();
    if(saving){
        res.json({
            status: "sended"
        })
    }
})

router.delete('/:id', async (req, res) => {
    const deleting = await Model.findByIdAndRemove(req.params.id);
    if(deleting){
        res.json({
            status: "successfully"
        })
    }
})

module.exports = router