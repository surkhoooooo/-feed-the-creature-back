const Functional = require('../models/Functional.model')


module.exports.functionalController = {
    getFunctional: async (req, res) => {
        const func = await Functional.find();

        res.json(func);
    },

    addFunctional: async (req, res) => {
        const func = await Functional.create({
            title: req.body.title,
            description: req.body.description,
            coordinates: req.body.coordinates,
            img: req.body.img,
        })
        res.json(func)
    },


}