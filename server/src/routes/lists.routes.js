const Router = require("express")
const { check, validationResult } = require("express-validator")
const mongoose = require("mongoose")
const User = require("../models/User")
const List = require("../models/List")
const Task = require("../models/Task")

const router = new Router()


//Get lists router
router.get('/getLists',
    [
        check('userId', "Uncorrect userId").isLength({ min: 1 }),
    ],
    async function (req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Uncorrect request", errors })
            }
            const { userId } = req.query
            const user = await User.findOne({ _id: mongoose.Types.ObjectId(userId) })
            if (!user) {
                return res.status(404).json({ message: "User not found" })
            }

            const userLists = user.listId
            const lists = await List.find({ userLists })

            return res.json({
                lists
            })

        } catch (e) {
            console.log(e)
            res.send({ message: "Server error (get lists)" })
        }
    })

//Get List router
router.get('/getList',
    [
        check('listId', "Uncorrect userId").isLength({ min: 1 })
    ],
    async function (req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Uncorrect request", errors })
            }
            const { listId } = req.query
            const list = await List.findOne({ _id: mongoose.Types.ObjectId(listId) })
            if (!list) {
                return res.status(404).json({ message: "List not found" })
            }

            return res.json({
                list
            })

        } catch (e) {
            console.log(e)
            res.send({ message: "Server error (get list)" })
        }
    })

// Add list router
router.post('/addList',
    [
        check('userId', "Uncorrect userId").isLength({ min: 1 }),
        check('title', "Uncorrect title").isLength({ min: 1 }),
        check('color', "Uncorrect color").isLength({ min: 1 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Uncorrect request", errors })
            }
            const { userId, title, color } = req.body

            const user = await User.findOne({ _id: mongoose.Types.ObjectId(userId) })
            if (!user) {
                return res.status(400).json({ message: "User not found", errors })
            }
            const list = new List({ title: title, userId: user.id, color: color })
            user.listId.push(list.id)
            await list.save()
            await user.save()
            return res.json(list)
        } catch (e) {
            console.log(e)
            res.send({ message: "Server error (add list)" })
        }
    })


//Edit list router
router.put('/editList',
    [
        check('listId', "Uncorrect taskId").isLength({ min: 1 }),
        check('title', "Uncorrect text").isLength({ min: 1 }),

    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Uncorrect request", errors })
            }
            const { listId, title } = req.body

            const list = await List.findOne({ _id: mongoose.Types.ObjectId(listId) })
            if (!list) {
                return res.status(400).json({ message: "List not found", errors })
            }
            list.title = title
            await list.save()

            return res.json({
                list
            })
        } catch (e) {
            console.log(e)
            res.send({ message: "Server error (edit list)" })
        }
    })

//Delete List router
router.put('/deleteList',
    [
        check('listId', "Uncorrect listId").isLength({ min: 1 }),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Uncorrect request", errors })
            }
            const { listId } = req.body

            const list = await List.findOne({ _id: mongoose.Types.ObjectId(listId) })
            if (!list) {
                return res.status(400).json({ message: "List not found", errors })
            }

            const tasks = list.tasksId
            if (tasks) {
                try {
                    for (let i = 0; i < tasks.length; i++) {
                        let task = tasks[i]
                        const temp = await Task.findOneAndDelete({ _id: mongoose.Types.ObjectId(task) })
                    }
                } catch { }
            }

            const userId = list.userId
            const user = await User.findOneAndUpdate(
                { _id: userId },
                { $pull: { listId: listId } }
            )
            const temp = await List.findByIdAndDelete({ _id: mongoose.Types.ObjectId(listId) })
            await user.save()

            const userLists = user.listId
            const lists = await List.find({ userLists })
            return res.json({
                lists
            })

        } catch (e) {
            console.log(e)
            res.send({ message: "Server error (delete list)" })
        }
    })


module.exports = router