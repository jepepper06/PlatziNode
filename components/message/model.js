const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mySchema = new Schema({
    chat:{
        type: Schema.ObjectId,
        ref:'Chat',
        required:true
    },
    user: {
        type:Schema.ObjectId,
        ref:'User',
        required:true,
    },
    message: { 
        type:String,
        required: true,
    },
    date:{
        type:Date,
        required: true,
    },
})

const model = mongoose.model('Messages',mySchema)

module.exports = model