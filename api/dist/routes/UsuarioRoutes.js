"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Usuarios_1 = require("../controllers/Usuarios");
const router = (0, express_1.Router)();
router.get('/', Usuarios_1.getUsuarios);
router.get('/:id', Usuarios_1.getUsuario);
router.post('/', Usuarios_1.postUsuario);
router.put('/:id', Usuarios_1.UpdateUsuario);
router.delete('/:id', Usuarios_1.DeleteUsuario);
exports.default = router;
//# sourceMappingURL=UsuarioRoutes.js.map