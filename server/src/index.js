const express = require('express')
const mongoose = require('mongoose')
const config = require('./config.json')
const authRouter = require('./routes/auth.routes')
const faqRouter = require('./routes/faq.routes')
const feedbackRouter = require('./routes/feedbacks.routes')
const infoRouter = require('./routes/info.routes')
const app = express()
const PORT = process.env.PORT || process.env.SERVER_PORT
const DB_URL = process.env.DB_URL
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.static('static'))
app.use('/api/auth', authRouter)
app.use('/api/faq', faqRouter)
app.use('/api/feedback', feedbackRouter)
app.use('/', infoRouter)

const start = async () => {
	try {
		await mongoose.connect(DB_URL),
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
			}

		app.listen(PORT, () => {
			console.log('Server started on port ', PORT)
		})
	} catch (e) {}
}

start()
