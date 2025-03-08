const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/productRouter");
const cors = require("cors")
const router = express.Router();

router.use(cors())

const app = express();
app.use(express.json()); 

app.use("/api", productRouter); 

mongoose.connect("mongodb://localhost:27017/foodApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => console.log(err));

const PORT = 5000 ;// changed
// const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
