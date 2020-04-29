
const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/show',async(req,res)=>{
    const estudiantes = await pool.query('SELECT * FROM estudiantes');
    res.render('estudiant/consultar',{estudiantes});
});

router.get('/add', async(req,res)=>{
   res.render('estudiant/add')

});

router.post('/add', async(req,res)=>{
   const {nombre_estu,edad,correo} = req.body;
   const consulta = {nombre_estu,edad,correo};
   await pool.query('insert into estudiantes set ?',[consulta]);
   res.redirect('./show');

});

router.get('/modificar/:id_estudiante',async(req,res)=>{
	const {id_estudiante} = req.params;
	const consultarid = await pool.query('select * from estudiantes where id_estudiante = ?',[id_estudiante]);
	res.render('estudiant/modificar',{consultarid:consultarid[0]});
});
router.post('/editar/:id_estudiante', async(req,res)=>{
    const {id_estudiante} = req.params;
    const {nombre_estu,edad,correo} =  req.body;
    const editarNew = {nombre_estu,edad,correo};
    await pool.query('update estudiantes set ? WHERE id_estudiante = ?',[editarNew,id_estudiante]);
    res.redirect('/estudiante/show');
});
router.get('/delete/:id_estudiante',async(req,res)=>{
  const {id_estudiante} = req.params;
  const consultaid = await pool.query('DELETE from estudiantes where id_estudiante = ?',[id_estudiante]);
  res.redirect('/estudiante/show');
});

module.exports = router;