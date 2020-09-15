const connection = require('../database/connection');
const bcrypt = require('bcrypt');
const Login = require('../middleware/Login');

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
        const {
            username,
            password,
            name
        } = request.body;

        const encryptPassword = await bcrypt.hash(password, 10);

        try {
            const insertedData = {
                name,
                username,
                password: encryptPassword
            }

            await connection('users').insert(insertedData);

            return response.status(201).json(insertedData);

        } catch (error) {
            next(error)
        }
    },
}