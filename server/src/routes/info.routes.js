const Router = require("express")

const router = new Router()

router.get('/', (req, res) => {
    res.send('Hello this is server page, later here will be docs of this project')
})

module.exports = router