import express from "express";
import { catsRule } from "../data/cats.js";

const catoneRouther = express.Router();

catoneRouther.get('/', (req,res) => {
    res.render(
        "pages/kittens",
        {
            pageTitle: "Who doesn´t love kittens?"

        }
    )
})

export default catoneRouther;



function Cat(name, age, color) {
    this.name = name,
    this.age = age,
    this.color = color
}

const Pepzi = new Cat ("Pepzi,  4 , grey");
const  Sirap =  new Cat("Sirap, 10, orange");

const catsRule = [];