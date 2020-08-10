const mongoose = require("mongoose");

var conn1 = mongoose.createConnection('mongodb://localhost/goalBesar');


const goalBesarSchema = conn1.model('Model', new mongoose.Schema ({

    GoalBesar1 :{
        type: String,
        required: true,
    },

})


module.exports = mongoose.model("GoalBesar", goalBesarSchema)