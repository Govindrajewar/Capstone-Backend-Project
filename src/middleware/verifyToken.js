const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    try{
        const token = req.header('Authorization').split(' ')[1]

        if(!token){
            return res.status(400).json({
                message: 'Token is not available'
            })
        }

        const decoded = jwt.verify(token, process.env.TokenKey)

        req.refUserId = decoded.userId;

        next();
    } catch(error){
        res.status(401).json({
            message: 'Token is not valid'
        })
    }
}

module.exports = verifyToken;