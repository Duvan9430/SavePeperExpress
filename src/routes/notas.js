const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/show',async(req,res)=>{
    const notas = await pool.query('SELECT * FROM notas');
    res.render('notas/consultar',{notas});
});
router.get('/add', async(req,res)=>{
   res.render('notas/agregar');

});

router.post('/add', async(req,res)=>{
   const {id_docente,id_estudiante,id_materia,id_periodo,nota} = req.body;
   const consulta = {id_docente,id_estudiante,id_materia,id_periodo,nota};
   await pool.query('insert into notas set ?',[consulta]);
   res.redirect('./show');

});
router.get('/modificar/:id_notas',async(req,res)=>{
	const {id_notas} = req.params;
	const consulta = await pool.query("select * from notas where id_notas = ?",[id_notas]);
	res.render('notas/modificar',{consula:consulta[0]});
});
router.post('/editar/:id_notas', async(req,res)=>{
    const {id_notas} = req.params;
    const {id_docente,id_estudiante,id_materia,id_periodo,nota} =  req.body;
    const editarNew = {id_docente,id_estudiante,id_materia,id_periodo,nota};
    await pool.query('update notas set ? WHERE id_notas = ?',[editarNew,id_notas]);
    res.redirect('/notas/show');
});
router.get('/delete/:id_notas',async(req,res)=>{
  const {id_notas} = req.params;
  const consultaid = await pool.query('DELETE from notas where id_notas = ?',[id_notas]);
  res.redirect('/notas/show');
});

module.exports = router;