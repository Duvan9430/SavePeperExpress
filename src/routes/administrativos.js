const express = require('express');
const router = express.Router();
//const pool =require('../database');

router.get('/pepita',(req,res)=>{
   const primera='soy primera';

    console.log('yo consol');
    console.log(primera);
   res.send('holitassssss');
});

module.exports = router;