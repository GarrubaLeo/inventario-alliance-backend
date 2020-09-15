const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (request, response, next) => {
    try {
        const token = request.headers.authorization.split(' ')[1];

        const decode = jwt.verify(
            token,
            process.env.JWT_KEY
        );

        request.user = decode;

        next();
    } catch (error) {
        return response.status(401).json({ error: 'Falha na autenticação!'})
    }
}