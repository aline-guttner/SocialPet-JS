import Pet from "../models/petModel.js"

class petController{
    static createPet = async (req,res) =>{
        const pet = await Pet.create(request.body)
        return response.status(200).send({ pet })
    }

    static getOnePet = async (req, res) => {
        try {
            const pet = await Pet.findById(req.params.id)
            if (pet == null) {
                return res.status(404).json({ message: 'Cannot find pet' })

            }
            res.send(pet)
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
    }

    static updatePet = async (req, res) => {
        let pet
        try {
            pet = await Pet.findById(req.params.id)
            if (pet == null) {
                return res.status(404).json({ message: 'Cannot find pet' })

            }
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
        res.pet = pet
        if (req.body.petName != null) {
            res.pet.petName = req.body.petName
        }
        if (req.body.petType != null) {
            res.pet.petType = req.body.petType
        }
        if (req.body.petImg != null) {
            res.pet.petImg = req.body.petImg
        }
        try {
            const updatedPet = await res.pet.save()
            res.json(updatedPet)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }

    static deletePet = async (req, res) => {
        let pet
        try {
            pet = await Pet.findById(req.params.id)
            if (pet == null) {
                return res.status(404).json({ message: 'Cannot find pet' })

            }
        } catch (err) {
            return res.status(500).json({ message: err.message })
        }
        res.pet = pet
        try {
            await res.pet.remove()
            res.json({ message: "Deleted pet" })
        } catch (err) {
            res.status(500).json({ message: err.message })
        }
    }
}

export default petController