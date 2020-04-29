const express = require('express');
const router = express.Router();
const pool =require('../database');

// ruta para consultar todo los docentes
router.get('/show', async(req,res)=>{
    const todosdocentes = await pool.query('select * from docentes');
    console.log(todosdocentes);
    res.render('docen/consultar',{todosdocentes});
});

router.get('/add', async(req,res)=>{
   res.render('docen/add')

});

router.post('/add', async(req,res)=>{
   const {nombre_docen,edad,correo} = req.body;
   const consulta = {nombre_docen,edad,correo};
   await pool.query('insert into docentes set ?',[consulta]);
   res.redirect('./show');

});

router.get('/modifica/:id_docente',async(req,res)=>{
	const {id_docente} = req.params;
  const consultaid = await pool.query('select * from docentes where id_docente = ?',[id_docente]);
	res.render('docen/modificar',{consultaid:consultaid[0]});
});

router.post('/editar/:id_docente', async(req,res)=>{
    const {id_docente} = req.params;
    const {nombre_docen,edad,correo} =  req.body;
    const editarNew = {nombre_docen,edad,correo};
    await pool.query('update docentes set ? WHERE id_docente = ?',[editarNew,id_docente]);
    res.redirect('/docente/show');
});
router.get('/delete/:id_docente',async(req,res)=>{
  const {id_docente} = req.params;
  const consultaid = await pool.query('DELETE from docentes where id_docente = ?',[id_docente]);
  res.redirect('/docente/show');
});



module.exports = router;