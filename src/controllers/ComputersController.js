const connection = require('../database/connection');

module.exports = {
    async index(request, response, next) {
        const { codigo } = request.query;

        try {
            if(codigo == null) {
                const computers = await connection('computers')
                .select('*');

                return response.status(200).json(computers);
            }

            const computers = await connection('computers')
                .where('codigo', 'like', '%' + codigo + '%')
                .select('*');

            return response.status(200).json(computers);

        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        const {
            codigo,
            torre,
            ip,
            fabricante,
            modelo,
            numSerie,
            versaoOS,
            chaveWindows,
            versaoOffice,
            chaveOffice,
            obs,
            status,
            alocadoCom
        } = request.body;

        try {
            await connection('computers').insert({
                codigo,
                torre,
                ip,
                fabricante,
                modelo,
                numSerie,
                versaoOS,
                chaveWindows,
                versaoOffice,
                chaveOffice,
                obs,
                status,
                alocadoCom
            });

            return response.status(201).json({ succes: true, message: `Ativo ${codigo} cadastrado!` });
        } catch (error) {
            next(error);
        }
    },

    async update(request, response, next) {
        const { codigo } = request.params;

        const {
            torre,
            ip,
            fabricante,
            modelo,
            numSerie,
            versaoOS,
            chaveWindows,
            versaoOffice,
            chaveOffice,
            obs,
            status,
            alocadoCom
        } = request.body

        try {
            await connection('computers')
                .update({
                    torre,
                    ip,
                    fabricante,
                    modelo,
                    numSerie,
                    versaoOS,
                    chaveWindows,
                    versaoOffice,
                    chaveOffice,
                    obs,
                    status,
                    alocadoCom
                })
                .where('codigo', codigo);

            response.status(200).json({ succes: true, message: `Ativo ${codigo} atualizado!`});
        } catch (error) {
            next(error);
        }
    }
}