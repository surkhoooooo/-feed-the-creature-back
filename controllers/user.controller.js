const User = require('../models/User.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')  


module.exports.userController = {
    getUser: async (req, res) => {
        const user = await User.find();

        res.json(user)
    },

    addUser: async (req, res) => {
    
        const {login, password} = req.body

        const hash = await bcrypt.hash(password, Number(process.env.BCRYPT_ROUND))

        const user = await User.create({login:login, password: hash})

        res.json("Пользователь добавлен")
    },

    login: async (req, res) => {

        const {login, password} = req.body;

        const candidate = await User.findOne({login})

        if (!candidate) {
            return res.status(401).json('Неверный логин')
        }
        
        const valid = await bcrypt.compare(password, candidate.password);
        
        if (!valid) {
            return res.status(401).json('Неверный пароль')
        }
        
        const payload = {
            id: candidate._id,
            login  : candidate.login, 
        }

        const token = jwt.sign(payload, process.env.SECRET_JWT_KEY, {
            expiresIn: '48h'
        })

        res.json(token);
    }
}