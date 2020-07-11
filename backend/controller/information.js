const db = require('../models')

const getBirthday = async (req, res) => {
    const date = req.params.date_of_birth
    let month = date.slice(0,2)
    let day = date.slice(2)
    let newDate = month + '/' + day
    const getBdayPerson = await db.Information.findOne({ where: { date_no_year: newDate } })
    res.status(200).send(getBdayPerson)
}
const getInformation = async (req, res) => {
    const users = await db.Information.findAll()
    res.status(200).send(users)
}
const addInformation = async (req, res) => {
    const { last_name, first_name, date_of_birth, email } = req.body
    const user = await db.Information.create({
        last_name: last_name,
        first_name: first_name,
        date_of_birth: date_of_birth,
        email: email,
        date_no_year: date_of_birth.slice(5)
    })
    res.status(201).send(user)
}
const deleteInformation = async (req,res) => {
    await db.Information.destroy({where:{id:req.params.id}})
    res.status(204).send()
}

module.exports = {
    getInformation, addInformation, getBirthday,deleteInformation
}