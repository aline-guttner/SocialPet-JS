// import express, { response } from 'express'
// const router = express.Router();
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

class AuthController {

    static userRegister = async (request, response) => {
        console.log("pegou")
        const { email } = request.body;
        const possibleUser = await User.findOne({ email })
        if (possibleUser) {
            response.status(400).send({ error: "Usuário já cadastrado" })
        }

        const user = await User.create(request.body)

        return response.status(200).send({ user })
    }




    static login = async (req, res) => {
        console.log("pegou-login")
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");
        if (!User) {
            return res.status(400).send({ error: "Usuário não encontrado" })

            const isTheSame = await bcrypt.compare(password, user.password)
            if (!isTheSame) {
                return res.status(400).send({ error: "Credenciais Incorretas!" })
            }

            // gerando token
            const jwToken = jwt.sign(user.id, process.env.API_SECRET, { expiresIn: 60 * 60 * 24 })

            user.password = undefined
            return res.send(
                {
                    user,
                    token: this.generateToken(user.id)
                }
            )
        }

    }
    static generateToken(id) {
        return jwt.sign({ id }, process.env.API_SECRET, { expiresIn: 60 * 60 * 24 })

    }
}


export default AuthController;