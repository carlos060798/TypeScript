"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUsuario = exports.UpdateUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuariomodel_1 = __importDefault(require("../models/usuariomodel"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuariomodel_1.default.findAll();
    res.json({ msg: 'getUsuarios',
        usuarios
    });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuariomodel_1.default.findByPk(id);
    if (usuario) {
        res.json({ msg: 'getUsuario',
            usuario
        });
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const usuario = usuariomodel_1.default.build(body);
        yield usuario.save();
        res.json({ msg: 'usuario creado',
            usuario });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postUsuario = postUsuario;
const UpdateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: 'update Usuario' });
});
exports.UpdateUsuario = UpdateUsuario;
const DeleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: 'delete Usuario' });
});
exports.DeleteUsuario = DeleteUsuario;
//# sourceMappingURL=Usuarios.js.map