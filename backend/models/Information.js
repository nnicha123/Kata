module.exports = (sequelize,DataTypes) => {
    const model = sequelize.define('Information',{
        last_name:{
            type:DataTypes.STRING(255)
        },
        first_name:{
            type:DataTypes.STRING(255)
        },
        date_of_birth:{
            type:DataTypes.STRING(255)
        },
        email:{
            type:DataTypes.STRING(255)
        }
    },{
        tableName:'informations',
        timestamps:false
    })
    return model
}