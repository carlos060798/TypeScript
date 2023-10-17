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
    try {
        const { nombre, email, estado } = req.body;
        console.log(nombre, email, estado)
        // Verificar que todas las propiedades necesarias estén presentes
        if (!nombre || !email || estado === undefined) {
            return res.status(400).json({ msg: 'Faltan datos obligatorios' });
        }

        const user = await Usuario.create({
            nombre: nombre,
            email: email,
            estado: estado
        });

        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Hable con el administrador',err });
    }
};




const UpdateUsuario= async (req: Request, res: Response) => {

    const  {id}= req.params
    const {body}=req;
    try{
    const usuario= await Usuario.findByPk(id);
    if(!usuario){
        return res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    } else{
        await usuario.update(body);
        res.json({ msg: 'putUsuario',Usuario:usuario });
    }} catch(err) {
        console.error(err);
        res.status(500).json({ msg: 'Hable con el administrador',err });
    }
};


const DeleteUsuario = async (req: Request, res: Response) => {
    const {id}=req.params;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    } else {
        // await usuario.destroy();
        await usuario.destroy();

    res.json({ msg: 'delete Usuario' });
    }
};




export{
    getUsuarios,
    getUsuario,
    postUsuario,
    UpdateUsuario,
    DeleteUsuario
}