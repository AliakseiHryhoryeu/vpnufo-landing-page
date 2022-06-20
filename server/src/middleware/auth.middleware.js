const jwt = require('jsonwebtoken')
const config = require('../config.json')

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
       return next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: 'Auth error'})
        }
        const decoded = jwt.verify(token, config.secretKey)
        req.user = decoded
        next()
    } catch (e) {
        console.log(e)
        return res.status(401).json({message: 'Auth error'})
    }
}
