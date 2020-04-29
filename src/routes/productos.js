const express = require('express');
const router = express.Router();
const productos = require('../ejemplo.json');
const pool =require('../database');

console.log(productos);

// ruta para consultar todo los productos
router.get('/', async(req,res)=>{
    const produTodos = await pool.query('select * from productos ');
    //res.json(produTodos);
    const num1 = 'hola';
    console.log(num1);
    //res.render('productos/list',{produTodos});
    res.json(productos);
    //res.send('soy productos');
});

//rauta para consultar solo por id un producto
router.get('/:id', async(req,res)=>{
    const {id} = req.params;
    const produId = await pool.query('select * from productos where id_producto= ?',[id]);
    res.json(produId);
    //res.send(produId);
});

router.post('/',async(req,res)=>{
    const {nombre_producto,valor_producto,codigo_producto} = req.body;
    const newProducto ={nombre_producto,valor_producto,codigo_producto};
    await pool.query('insert into productos set ?', [newProducto]);
    console.log(req.body);
    res.send('tamos listones');
});

module.exports = router;
