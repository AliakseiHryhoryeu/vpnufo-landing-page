const express = require("express")
const mongoose = require("mongoose")
const config = require("./config.json")
const authRouter = require("./routes/auth.routes")
const listsRouter = require("./routes/lists.routes")
const tasksRouter = require("./routes/tasks.routes")
const infoRouter = require("./routes/info.routes")
const app = express()
const PORT = process.env.PORT || config.serverPort
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.static('static'))
app.use("/api/auth", authRouter)
app.use("/api/lists", listsRouter)
app.use("/api/tasks", tasksRouter)
app.use("/", infoRouter)

const start = async () => {
    try {
        await mongoose.connect(config.dbUrl),{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {

    }
}

start()