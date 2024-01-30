import { DataTypes } from 'sequelize'
import db from '../config/db.js'

const dbNoticias = db.define('dbnoticias', {
    titulo: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        timestamps: false
    }
})

export default dbNoticias