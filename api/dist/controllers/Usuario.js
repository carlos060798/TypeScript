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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUsuario = exports.UpdateUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: 'getUsuarios' });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: 'getUsuario' });
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ msg: 'post Usuario' });
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
//# sourceMappingURL=Usuario.js.map