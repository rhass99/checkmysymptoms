import Sequelize from 'sequelize';


const DATABASE = process.env.DATABASE_DEV || process.env.DATABASE;
const USER = process.env.USER_DEV || process.env.USER;
const PASSWORD = process.env.PASSWORD_DEV || process.env.PASSWORD;
const HOST= process.env.HOST_DEV || process.env.HOST;

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {host: HOST, dialect: 'postgres', pool: {max: 5, min: 0, idle: 10000}});

export default sequelize;