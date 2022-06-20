const { Schema, model } = require("mongoose")

const List = new Schema({
    title: { type: String, required: true },
    description: { type: String, default: '', required: false },
    color: { type: String, required: true },
    userId: { type: String, required: true },
    tasksId: { type: Array, required: false }
})

module.exports = model('lists', List)