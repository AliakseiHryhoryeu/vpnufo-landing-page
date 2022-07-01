const { Schema, model } = require('mongoose')

const User = new Schema({
	username: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	feedbacksId: { type: Array, required: false },
	faqId: { type: Array, required: false },
})

module.exports = model('User', User)
