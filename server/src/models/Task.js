const { Schema, model } = require("mongoose")


const Task = new Schema({
    text: { type: String, required: true },
    completed: { type: Boolean, required: false, default: false },
    listId: { type: String, required: true },
    userId: { type: String, required: true }

})


module.exports = model('task', Task)