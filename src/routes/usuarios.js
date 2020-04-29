const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/show',async(req,res)=>{
   const consultarp= await pool.query('select * from usuarios');
    res.render('usuarios/agregar',{consultarp});
});

router.get('/modificar/:id_usuario',async(req,res)=>{
    const {id_usuario} = req.params;
    const consulta = await pool.query("select * from usuarios where id_usuario = ?",[id_usuario]);
    res.render('usuarios/modificar',{consulta2:consulta[0]});
});
router.post('/editar/:id_usuario', async(req,res)=>{
    const {id_usuario} = req.params;
    const {like} =  req.body;
    const editarNew = {like};
    await pool.query('update usuarios set ? WHERE id_usuario = ?',[editarNew,id_usuario]);
    res.redirect('/usuarios/show');
});

module.exports = router;