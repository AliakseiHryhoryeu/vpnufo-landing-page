const { Schema, model } = require('mongoose')

const Faq = new Schema({
	title: { type: String, required: true },
	text: { type: String, required: true },
	userId: { type: String, required: true },
})

module.exports = model('Faq', Faq)
