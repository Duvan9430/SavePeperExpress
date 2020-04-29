const express = require('express');
const router = express.Router();
const pool =require('../database');

router.get('/show',async(req,res)=>{
    const periodo = await pool.query('SELECT * FROM periodo');
    res.render('periodo/consultar',{periodo});
});
router.get('/add', async(req,res)=>{
   res.render('periodo/agregar');

});

router.post('/add', async(req,res)=>{
   const {periodo} = req.body;
   const consulta = {periodo};
   await pool.query('insert into periodo set ?',[consulta]);
   res.redirect('./show');

});
router.get('/modificar/:id_periodo',async(req,res)=>{
	const {id_periodo} = req.params;
	const consulta = await pool.query("select * from periodo where id_periodo = ?",[id_periodo]);
	res.render('periodo/modificar',{consula:consulta[0]});
});
router.post('/editar/:id_periodo', async(req,res)=>{
    const {id_periodo} = req.params;
    const {periodo} =  req.body;
    const editarNew = {periodo};
    await pool.query('update periodo set ? WHERE id_periodo = ?',[editarNew,id_periodo]);
    res.redirect('/periodo/show');
});
router.get('/delete/:id_periodo',async(req,res)=>{
  const {id_periodo} = req.params;
  const consultaid = await pool.query('DELETE from periodo where id_periodo = ?',[id_periodo]);
  res.redirect('/periodo/show');
});
module.exports = router;