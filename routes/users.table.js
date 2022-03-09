const express = require("express")

const router = express.Router()

const Model = require ("../schemas/user")

router.get("/", async (req, res) => {
    const query = await Model.find()
    if(Array.from(query).length > 0){
        res.json({
            users: query
        })
    }
    else{
        res.send("No data")
    }
})

router.get("/:search", async (req, res) => {
    const query = await Model.findOne({ name: req.params.search }).exec();
    if(query){
        res.json(query)
    }
    else{
        res.send("No data")
    }
})

router.post('/', async (req, res) => {
    const { name, auth, timestamp } = req.body
    const builtUser = new Model({
        name,
        auth,
        timestamp
    })
    const saving = await builtUser.save();
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