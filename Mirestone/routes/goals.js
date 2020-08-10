const router = require("express").Router();

let goalKecil = require('..models/goalKecil.model')
let goalBesar = require('..models/goalBesar.model')

router.post("/addGoalBesar", (req, res) => {
    const GoalBesar1 = req.body.GoalBesar;
    const GoalKecil1 = req.body.GoalKecil1;
    const GoalKecil2 = req.body.GoalKecil2;
    const GoalKecil3 = req.body.GoalKecil3;
    
    const newGoalBesar = new goalBesar({GoalBesar: GoalBesar1});
    const newGoalKecil = new goalKecil({GoalKecil1 : GoalKecil1, GoalKecil2 : GoalKecil2, GoalKecil3 : GoalKecil3, });
    
    newGoalBesar
        .save()
        .then(() => res.json("Goal Besar added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    
    newGoalKecil
        .save()
        .then(() => res.json("Goal Kecil added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    
});

