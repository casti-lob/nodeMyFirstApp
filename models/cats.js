const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CatSchema = new Schema({
    name: String,
    age: Number,
    breed:String
})

module.exports= mongoose.model("cat", CatSchema)