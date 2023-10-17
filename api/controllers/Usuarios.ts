import { Request, Response } from 'express';
import  Usuario from '../models/usuariomodel';
const getUsuarios = async (req: Request, res: Response) => {
    const usuarios = await Usuario.findAll();
    res.json({ msg: 'getUsuarios' 
    ,usuarios

});
};


const getUsuario = async (req: Request, res: Response) => {
    const {id}=req.params;
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
    res.json({ msg: 'getUsuario'
    ,usuario
 });}else{
    res.status(404).json({
        msg: `No existe un usuario con el id ${id}`
    })
 }
};


const postUsuario = async (req: Request, res: Response) => {
    try{
    const {body}=req;
    const usuario = Usuario.build(body);
    await usuario.save();
    res.json({ msg: 'usuario creado',
    usuario });
    }catch(err){
        console.log(err);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
    
};


const UpdateUsuario= async (req: Request, res: Response) => {
    res.json({ msg: 'update Usuario' });
};


const DeleteUsuario = async (req: Request, res: Response) => {
    res.json({ msg: 'delete Usuario' });
};




export{
    getUsuarios,
    getUsuario,
    postUsuario,
    UpdateUsuario,
    DeleteUsuario
}