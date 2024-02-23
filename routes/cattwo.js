import express from "express";

const cattwoRouther = express.Router();

cattwoRouther.get('/', (req,res) => {
    res.render(
        "pages/kittens",
        {
            pageTitle: "Who doesn´t love cats?"
        }
    )
})

export default cattwoRouther;