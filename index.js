import express from "express";
import catoneRouther from "./routes/catone.js";
import cattwoRouther from "./routes/cattwo.js";


const app = express();
const port = 4444;

app.get('/', (req,res) => {
    res.render(
        "pages/home",
        {
            pageTitle: "Welcome to the world of cats!"
        })
})

app.use("/catone", catoneRouther)
app.use("/cattwo", cattwoRouther)

app.set("view engine", "ejs");
 
app.listen(port, console.log(`Server running around on port ${port}`));