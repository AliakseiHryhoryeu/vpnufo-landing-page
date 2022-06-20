const Router = require("express")
const { check, validationResult } = require("express-validator")

const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config.json")
const authMiddleware = require('../middleware/auth.middleware')


const router = new Router()

router.post('/registration',
    [
        check('email', "Uncorrect email").isEmail(),
        check('password', 'Password must be longer than 3 and shorter than 12').isLength({ min: 3, max: 12 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Uncorrect request", errors })
            }
            const { email, password, username } = req.body
            const candidateEmail = await User.findOne({ email })
            if (candidateEmail) {
                return res.status(400).json({ message: `User with email ${email} alredy exsist` })
            }
            const candidateUsername = await User.findOne({ username })
            if (candidateUsername) {
                return res.status(400).json({ message: `User with username ${username} alredy exsist` })
            }
            const hashPassword = await bcrypt.hash(password, 4)
            const user = new User({ email, password: hashPassword, username })
            await user.save()
            return res.json({ message: "User was created" })

        } catch (e) {
            console.log(e)
            res.send({ message: "Server error (registration)" })
        }
    })

router.post('/login',
    async (req, res) => {
        try {
            const { username, password } = req.body
            const user = await User.findOne({ username })
            if (!user) {
                return res.status(404).json({ message: "User not found" })
            }

            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({ message: "Invalid password" })
            }
            const token = jwt.sign({ id: user.id }, config.secretKey, { expiresIn: "48h" })
            return res.json({
                token,
                user: {
                    id: user.id,
                    username: user.username,
                    userIcon: user.userIcon
                }
            })

        } catch (e) {
            console.log(e)
            res.send({ message: "Server error (login)" })
        }
    })

router.get('/auth', authMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user.id })
        const token = jwt.sign({ id: user.id }, config.secretKey, { expiresIn: "48h" })
        return res.json({
            token,
            user: {
                userId: user.id,
                username: user.username,
                userIcon: user.userIcon
            }
        })
    } catch (e) {
        console.log(e)
        res.send({ message: "Server error (auth)" })
    }
})


module.exports = router