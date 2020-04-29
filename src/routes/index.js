const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
 //res.send('Hello World');
 const data = {
    "nombre":"Esto es ejemplo :v go /docente  /estudiante /materias /periodo /notas ",
    "apellido":"Duban Javier Tovar ",
 };
res.json(data);
});
module.exports = router;
