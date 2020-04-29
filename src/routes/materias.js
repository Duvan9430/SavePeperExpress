const express = require('express');
const router = express.Router();
const pool =require('../database');


router.get('/show',async(req,res)=>{
    const materias = await pool.query('SELECT * FROM materia');
    res.render('materias/consultar',{materias});
});
router.get('/add', async(req,res)=>{
   res.render('materias/agregar');

});

router.post('/add', async(req,res)=>{
   const {materia} = req.body;
   const consulta = {materia};
   await pool.query('insert into materia set ?',[consulta]);
   res.redirect('./show');

});
router.get('/modificar/:id_materia',async(req,res)=>{
	const {id_materia} = req.params;
	const consulta = await pool.query("select * from materia where id_materia = ?",[id_materia]);
	res.render('materias/editar',{consula:consulta[0]});
});

router.post('/editar/:id_materia', async(req,res)=>{
    const {id_materia} = req.params;
    const {materia} =  req.body;
    const editarNew = {materia};
    await pool.query('update materia set ? WHERE id_materia = ?',[editarNew,id_materia]);
    res.redirect('/materias/show');
});
router.get('/delete/:id_materia',async(req,res)=>{
  const {id_materia} = req.params;
  const consultaid = await pool.query('DELETE from materia where id_materia = ?',[id_materia]);
  res.redirect('/materias/show');
});





module.exports = router;