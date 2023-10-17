"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Option 1: Passing a connection URI
const db = new sequelize_1.Sequelize('usuario', "root", "", {
    host: "localhost",
    dialect: "mariadb",
    //logging: false
});
exports.default = db;
//# sourceMappingURL=conexion.js.map