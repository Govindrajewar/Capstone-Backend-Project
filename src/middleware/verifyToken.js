const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {

    const token = req.header('Authorization').split(' ')[1]

    if(!token){
        return res.status(400).json({
            message: 'Token is not available'
        })
    }

    const decoded = jwt.verify(token, process.env.TokenKey)

    req.user = decoded;

    next();
}

module.exports = verifyToken;