const db = require('../models')

const getInformation = async(req,res) => {
    const users = await db.Information.findAll()
    res.status(200).send(users)
}
const addInformation = async(req,res) => {
    const {last_name,first_name,date_of_birth,email} = req.body
    const user = await db.Information.create({
        last_name:last_name,
        first_name:first_name,
        date_of_birth:date_of_birth,
        email:email
    })
    res.status(201).send(user)
}

module.exports = {
    getInformation,addInformation
}