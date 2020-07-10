const db = require('../models')

const getBirthday = async (req, res) => {
    const date = req.params.date_of_birth
    let month = date.slice(0, 2)
    let day = date.slice(2)
    let newDate = month + '/' + day

    const targetId = req.params.id
    const getBdayPerson = await db.Information.findOne({ where: { date_of_birth: newDate } })
    let newdate = (getBdayPerson.date_of_birth)

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
        email: email
    })
    res.status(201).send(user)
}

module.exports = {
    getInformation, addInformation, getBirthday
}