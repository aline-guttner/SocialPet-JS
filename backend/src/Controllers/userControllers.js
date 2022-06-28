import User from "../models/userModel.js"


class userController {
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

    static createUser = async (req, res) => {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password

        })

        try {
            const newUser = await user.save()
            res.status(201).json(newUser)
            // 201 means successfully created an object
        } catch (err) {
            res.status(400).json({ message: err.message })
            // 400 means the error is on the client side
        }
    }

    static updateUser = async (req, res) => {
        if (req.body.name != null) {
            res.user.name = req.body.name
        }
        if (req.body.username != null) {
            res.user.username = res.body.username
        }
        if (req.body.email != null) {
            res.user.email = req.body.email
        }
        if (req.body.password != null) {
            res.user.password = res.body.password
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
            res.status(400).json({ message: err.message })
        }
    }
    static deleteUser = async (req, res) => {
        try {
            await res.user.remove()
            res.json({ message: "Deleted user" })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }


}

export default userController



