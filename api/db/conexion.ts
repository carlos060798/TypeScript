import { Sequelize } from "sequelize";

// Option 1: Passing a connection URI
const db = new Sequelize('usuario',"root","",{
    host: "localhost",
    dialect: "mariadb",
    //logging: false
})


export default db;