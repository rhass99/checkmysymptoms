import { DataTypes } from 'sequelize'
import sequelize from '../../core/server'


const User = sequelize.define('userLogin', {
    firstName: {
        type: DataTypes.STRING,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.STRING,
        field: 'last_name'
    },
    email: {
        type: DataTypes.STRING,
        field: 'email'
    },
    password: {
        type: DataTypes.STRING,
        field: 'password'
    }
});