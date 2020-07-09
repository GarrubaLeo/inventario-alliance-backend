const connection = require('../database/connection');
const bcrypt = require('bcrypt');


module.exports = {
    async index (request, response, next) {
        try {
            const users = await connection('users').select('*');

            response.status(200).json({ users });
        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            const { username, password, name } = request.body;
            const passwordEncrypted = await encrypt(password);

            await connection('users').insert({
                username,
                password: passwordEncrypted,
                name
            })

            return response.status(201).json({ success: true, username, passwordEncrypted, name});
        } catch (error) {
            next(error);
        }
    },

    async authentication (request, response, next) {
        try {
            const { username, password } = request.body;

            const user = await connection('users')
                .where('username', username)
                .select('*');

            if(user.length < 1) {
                return response.status(401).json({ error: 'Falha na autenticação'})
            } else {
                bcrypt.compare(password, user[0].password, (err, result) => {
                    if(err) {
                        return response.status(401).json({ error: 'Falha na autenticação'})
                    }
                    if(result) {
                        const name = user[0].name;
                        return response.status(201).json({ name });
                    }
                })
            }   

            //if(username === user.username && password === bcrypt.hashSync(user.password, salt));
        } catch (error) {
            next(error);
        }
    }
}

function encrypt(password) {
    var salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}