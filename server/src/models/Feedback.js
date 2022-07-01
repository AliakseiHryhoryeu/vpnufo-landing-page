const { Schema, model } = require('mongoose')

const Feedback = new Schema({
	title: { type: String, required: true },
	text: { type: String, required: true },
	username: { type: String, required: true, default: 'Ufo' },
	// usernameImg: { type: File, required: false },
	date: { type: String, required: true, default: Date.now() },
	userId: { type: String, required: true },
})

module.exports = model('Feedback', Feedback)
