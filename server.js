const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const mongoose = require("mongoose")
const app = express()
const router = express.Router()
const sample = require("./node/routes/sample")(router)
const port = process.env.PORT || 8080
const cors =require("cors")
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan("dev"))
app.use(cors({
    origin:"http://localhost:4200"
}))
const uri = "mongodb://localhost:27017/sample"
mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log("Not Connected")
    } else {
        console.log("Connected")
    }
})
app.use("/sample", sample)
app.listen(port, (err) => {
    console.log("port running")
})