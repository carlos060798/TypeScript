import { Router } from "express";
import {
    getUsuarios,
    getUsuario,
    postUsuario,
    UpdateUsuario,
    DeleteUsuario
} from "../controllers/Usuarios";

const router =  Router();

router.get('/',getUsuarios)
router.get('/:id',getUsuario)
router.post('/',postUsuario)
router.put('/:id',UpdateUsuario)
router.delete('/:id',DeleteUsuario)

export default router