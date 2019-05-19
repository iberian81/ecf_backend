
const express = require('express');
const router = express.Router();



const dbConnection = require('../modules/db-connection');


//récupération de toutes les villes
router.get('/villes', (req, res, next)=> {
    const sql = 'SELECT * FROM villes';
    dbConnection.query(sql, (err, data)=> {
        if (!err) {
            console.log(data);
            res.send(data);
        } 
    });
});

//récupération d'une ville
router.get('/ville/:id', (req, res)=>{
    const sql = 'SELECT * FROM villes WHERE id=?';
    dbConnection.query(sql, [req.params.id], (err,data)=>{
        if(!err){
            console.log("city selected");
            res.send(data)
        }
    })
});

//suppression d'une ville
router.get('/villesss/:id', (req, res) =>{
    const sql = 'DELETE FROM villes WHERE id=?';
    dbConnection.query(sql, [req.params.id], (err)=>{
        if(!err){
        res.json({message: "Eliminado"});
        }
    });
});


//ajout d'une ville
router.post('/ville', (req, res)=>{
    const sql = 'INSERT INTO villes SET ?';
    const insertData = {
        ville : req.body.ville,
        pays : req.body.pays,
        continent : req.body.continent,
        population : req.body.population
    };
    dbConnection.query(sql, insertData, (err)=>{
        if(err) console.log(err);
        res.redirect('/villes');
        
    });
});



module.exports = router;
