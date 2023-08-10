const express = require ("express");
const router = express.Router();
const Contact = require("./contactDB");
//const methodOverride = require("method-override")

router.get("/app", async(req, res) =>{

    try{
        const data = await Contact.find();
        res.render("app", {dataList : data});
    }catch(error){
        res.status(500).json({message : error.message});
    }

});

router.post("/submit", async(req, res) => {
    const data = new Contact({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone
    });

    try {
        const dataToSave = await data.save();
        res.redirect("app");
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});

router.get("/:id", async(req, res) => {
    
    try{
        const data = await Contact.findById(req.params.id);
        res.json(data);
    }catch(error){
        res.status(500).json({message : error.message});
    }

})

router.put("/:id", async(req, res) => {
    try{
        const id = req.params.id;
        const updateData = req.body;
        const options = {new : true};

        const result = await Contact.findByIdAndUpdate(id, updateData, options);
        res.send(result);

    }catch(error){
        res.status(400).json({message : error.message});
    }
});

router.post("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const data = await Contact.findByIdAndDelete(id);
        res.redirect("app");
    } catch (error) {
        res.status(400).json({message : error.message});
    }
})


module.exports = router;