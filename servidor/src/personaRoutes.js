const express = require('express');
const router = express.Router()

router.get('/person', (req, res)=>{
    res.json({message:'Entro el cliente'});
});

module.exports = router;