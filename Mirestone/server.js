const express = require('express')
const mongoose = require ('mongoose')
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/mern-prod-tracker",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.connection.on("connected", () => {
  console.log("Connected to database mongodb");
});

mongoose.connection.on("error", (err) => {
  if (err) {
    console.log(err);
  }
});

app.use(cors());


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
  
// Jeremy: Goals Besar dan Kecil 

app.use(express.json());

const goalsRouter = require('./routes/goals')
app.use('/goals', goalsRouter)