const { Schema, model } = require("mongoose")


const User = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    userIcon: { type: String, default: "/41da9d31d5dbcef0e231.png", required: true },
    listId: { type: Array, required: false }
})


// 'users' - collection name, User - Schema (variable)
module.exports = model('users', User)