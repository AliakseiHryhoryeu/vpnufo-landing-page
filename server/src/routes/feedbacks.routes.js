const Router = require('express')
const { check, validationResult } = require('express-validator')
const mongoose = require('mongoose')
const User = require('../models/User')
const Feedback = require('../models/Feedback')

const router = new Router()

//Get faq router
router.get('/getFeedbacks', async function (req, res) {
	try {
		const faqPosts = await Faq.find()
		return res.json({
			faqPosts,
		})
	} catch (e) {
		console.log(e)
		res.send({ message: 'Server error - Get FAQ posts' })
	}
})

// Add list router
router.post(
	'/addFeedback',
	[
		check('title', 'Uncorrect title').isLength({ min: 1 }),
		check('text', 'Uncorrect text').isLength({ min: 1 }),
		check('username', 'Uncorrect username').isLength({ min: 1 }),
		check('date', 'Uncorrect date').isLength({ min: 1 }),
		check('userId', 'Uncorrect userId').isLength({ min: 1 }),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({ message: 'Uncorrect request', errors })
			}
			const { title, text, username, date, userId } = req.body

			const user = await User.findOne({ _id: mongoose.Types.ObjectId(userId) })
			if (!user) {
				return res.status(400).json({ message: 'User not found', errors })
			}
			const feedback = new Feedback({
				title: title,
				text: text,
				username: username,
				date: date,
				userId: user.id,
			})
			user.feedbacksId.push(faq.id)
			await feedback.save()
			await user.save()
			return res.json(feedback)
		} catch (e) {
			console.log(e)
			res.send({ message: 'Server error - Add Feedback post' })
		}
	}
)

//Edit list router
router.put(
	'/editFeedback',
	[
		check('feedbackId', 'Uncorrect feedbackId').isLength({ min: 1 }),
		check('title', 'Uncorrect title').isLength({ min: 1 }),
		check('text', 'Uncorrect text').isLength({ min: 1 }),
		check('username', 'Uncorrect username').isLength({ min: 1 }),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({ message: 'Uncorrect request', errors })
			}
			const { feedbackId, title, text, username } = req.body

			const feedback = await Feedback.findOne({
				_id: mongoose.Types.ObjectId(feedbackId),
			})
			if (!feedback) {
				return res.status(400).json({ message: 'Faq post not found', errors })
			}
			feedback.title = title
			feedback.text = text
			feedback.username = username

			await feedback.save()

			return res.json({
				feedback,
			})
		} catch (e) {
			console.log(e)
			res.send({ message: 'Server error - Edit Feedback)' })
		}
	}
)

//Delete List router
router.put(
	'/deleteFeedback',
	[check('feedbackId', 'Uncorrect feedbackId').isLength({ min: 1 })],
	async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({ message: 'Uncorrect request', errors })
			}
			const { feedbackId } = req.body

			const feedback = await Feedback.findOne({
				_id: mongoose.Types.ObjectId(feedbackId),
			})
			if (!feedback) {
				return res.status(400).json({ message: 'Faq post not found', errors })
			}

			const userId = feedback.userId
			const user = await User.findOneAndUpdate(
				{ _id: userId },
				{ $pull: { feedbackId: feedbackId } }
			)
			const temp = await Feedback.findByIdAndDelete({
				_id: mongoose.Types.ObjectId(feedbackId),
			})
			await user.save()

			const feedbacks = await Feedback.find()
			return res.json({
				feedbacks,
			})
		} catch (e) {
			console.log(e)
			res.send({ message: 'Server error (delete list)' })
		}
	}
)

module.exports = router
