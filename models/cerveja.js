import { sequelize } from "../database.js"
import { DataTypes } from "sequelize"

const Cerveja = sequelize.define('cerveja', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }, tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }, nacionalidade: {
        type: DataTypes.STRING,
        allowNull: false
    },abv: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
},{
    freezeTableName: true,
    tableName: 'Cervejas'
}
)

export { Cerveja } 