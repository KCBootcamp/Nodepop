/**
 * Created by bhavishchandnani on 8/5/16.
 */
"use strict";
var express = require('express');
var router = express.Router();

let mongoose = require('mongoose');
let Token = mongoose.model('Token');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    console.log('Pasa por el middleware');
    let tokenpush=new Token({plataforma: req.query.plataforma, token: req.query.token, usuario: req.query.usuario});
    tokenpush.save(function (err, tokenCreated) {
        if (err) {
            console.log('Error', err, 'al guardar token push: ', tokenpush);
            return next();

        }

        console.log('Token push', tokenCreated);
        return next();
    });
});

module.exports = router;