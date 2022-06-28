// import express, { response } from 'express'
// const router = express.Router();
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"

class AuthController {

    static userRegister = async (request, response) => {
        console.log("pegou")
        const { email } = request.body;
        const possibleUser = await User.findOne({ email })
        if (possibleUser) {
            response.status(400).send({ error: "Usuário já cadastrado" })
            return
        }

        const user = await User.create(request.body)

        return response.status(200).send({ user })
    }




    static login = async (req, res) => {
        console.log("pegou-login")
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");
        if (!user)
            return res.status(400).send({ error: "Usuário não encontrado" })

        const isTheSame = await bcrypt.compare(password, user.password)
        if (!isTheSame) {
            return res.status(400).send({ error: "Credenciais Incorretas!" })
        }
        // gerando token

        user.password = undefined
        return res.send(
            {
                user,
                token: this.generateToken(user)
            }
        )
    }


    static generateToken(user) {
        return jsonwebtoken.sign({ id: user.id, name: user.name }, process.env.API_SECRET, {
            expiresIn: 86400
        })

    }

    static userHome = (req, res) => {
        console.log('REQUISIÇÃO', req);
        res.status(200).send({
            "message": "Olá, pessoa!"
        });
    };

    static getAllUsers = async (req, res) => {
        try {
            const users = await User.find()
            res.json(users)
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }

    static getOneUser = async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            if (user == null) {
                return res.status(404).json({ message: 'Cannot find user' })

            }
            res.send(user)
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }

    static updateUser = async (req, res) => {
        let user
        try {
            user = await User.findById(req.params.id)
            if (user == null) {
                return res.status(404).json({ message: 'Cannot find user' })

            }
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
        res.user = user
        if (req.body.name != null) {
            res.user.name = req.body.name
        }
        if (req.body.username != null) {
            res.user.username = res.body.username
        }
        if (req.body.email != null) {
            res.user.email = req.body.email
        }
        if (req.body.birthDate != null) {
            res.user.birthDate = req.body.birthDate
        }
        if (req.body.phone != null) {
            res.user.phone = res.body.phone
        }
        try {
            const updatedUser = await res.user.save()
            res.json(updatedUser)
        } catch (err) {
            console.log(user)
            res.status(400).json({ message: err.message })
        }
    }
    static deleteUser = async (req, res) => {
        let user
        try {
            user = await User.findById(req.params.id)
            if (user == null) {
                return res.status(404).json({ message: 'Cannot find user' })

            }
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
        res.user = user
        try {
            await res.user.remove()
            res.json({ message: "Deleted user" })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}



export default AuthController;