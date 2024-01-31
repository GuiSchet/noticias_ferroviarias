import { DataTypes } from 'sequelize'
import db from '../config/db.js'

const dbNoticias = db.define('dbnoticias', {
    titulo: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    enlace: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fechaPublicacion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    puntaje: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default dbNoticias