const Router = require('express')
const { check, validationResult } = require('express-validator')
const mongoose = require('mongoose')
const User = require('../models/User')
const Faq = require('../models/Faq')

const router = new Router()

//Get faq router
router.get('/getFaq', async function (req, res) {
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
	'/addFaq',
	[
		check('title', 'Uncorrect title').isLength({ min: 1 }),
		check('text', 'Uncorrect text').isLength({ min: 1 }),
		check('userId', 'Uncorrect userId').isLength({ min: 1 }),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({ message: 'Uncorrect request', errors })
			}
			const { title, text, userId } = req.body

			const user = await User.findOne({ _id: mongoose.Types.ObjectId(userId) })
			if (!user) {
				return res.status(400).json({ message: 'User not found', errors })
			}
			const faq = new Faq({ title: title, userId: user.id, text: text })
			user.faqId.push(faq.id)
			await faq.save()
			await user.save()
			return res.json(faq)
		} catch (e) {
			console.log(e)
			res.send({ message: 'Server error - Add FAQ post' })
		}
	}
)

//Edit list router
router.put(
	'/editFaq',
	[
		check('faqId', 'Uncorrect faqId').isLength({ min: 1 }),
		check('title', 'Uncorrect text').isLength({ min: 1 }),
		check('text', 'Uncorrect text').isLength({ min: 1 }),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({ message: 'Uncorrect request', errors })
			}
			const { faqId, title, text } = req.body

			const faq = await Faq.findOne({ _id: mongoose.Types.ObjectId(faqId) })
			if (!faq) {
				return res.status(400).json({ message: 'Faq post not found', errors })
			}
			faq.title = title
			faq.title = text
			await faq.save()

			return res.json({
				faq,
			})
		} catch (e) {
			console.log(e)
			res.send({ message: 'Server error - Edit FAQ)' })
		}
	}
)

//Delete List router
router.put(
	'/deleteFaq',
	[check('faqId', 'Uncorrect faqId').isLength({ min: 1 })],
	async (req, res) => {
		try {
			const errors = validationResult(req)
			if (!errors.isEmpty()) {
				return res.status(400).json({ message: 'Uncorrect request', errors })
			}
			const { faqId } = req.body

			const faq = await Faq.findOne({ _id: mongoose.Types.ObjectId(faqId) })
			if (!faq) {
				return res.status(400).json({ message: 'Faq post not found', errors })
			}

			const userId = faq.userId
			const user = await User.findOneAndUpdate(
				{ _id: userId },
				{ $pull: { faqId: faqId } }
			)
			const temp = await Faq.findByIdAndDelete({
				_id: mongoose.Types.ObjectId(faqId),
			})
			await user.save()

			const faqs = await Faq.find()
			return res.json({
				faqs,
			})
		} catch (e) {
			console.log(e)
			res.send({ message: 'Server error (delete list)' })
		}
	}
)

module.exports = router
