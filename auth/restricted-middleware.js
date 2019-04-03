const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../users/users-model')
const { decodedJwt } = require('../config/secret')

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ err: 'user not verified' })
            } else {
                console.log('taken confirmed', decodedToken)
                req.decodedJwt = decodedToken
            }
        })
    }
}