const {Sequelize}=require('sequelize');
const sequelize=require('../connection');

module.exports=sequelize.define
(
    "Results",
    {
        Rollno:{
            type:Sequelize.INTEGER(11),
            allowNull:false,
            primaryKey:true,
        },
        Name:
        {
            type:Sequelize.STRING(300),
            allowNull:false
        },
        DOB:
        {
            type:Sequelize.DATEONLY,
            allowNull:false
        },
        Score:
        {
            type:Sequelize.DECIMAL,
            allowNull:false
        }

    }
)


