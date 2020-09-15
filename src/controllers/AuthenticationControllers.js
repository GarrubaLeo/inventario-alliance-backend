const connection = require('../database/connection');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = {
    async authentication(request, response, next) {
        const { username, password } = request.body;

        const user = await connection('users')
            .where('username', username)
            .select('*');

        if (user.length < 1) {

            return response.status(401).json({ error: 'Falha na autenticação' })

        } else {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (err) {
                    return response.status(401).json({ error: 'Usuário ou senha inválidos' })
                }

                if (result) {
                    const token = jwt.sign({
                        name: user[0].name,
                        username: user[0].username
                    }, process.env.JWT_KEY, { expiresIn: '7d' });

                    return response.status(200).json({ message: 'Autenticado com sucesso!', token })
                }

                return response.status(401).json({ error: 'Falha na autenticação' })
            })
        }
    }
}