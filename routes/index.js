var express = require('express');
var router = express.Router();

import LibAuth from "../libs/LibAuth"
import LibBaseParams from "../libs/LibBaseParams"

// res.send('respond with a resource-1234');
/******************************** 
* 
*********************************/
router.get('/', function(req, res, next) {
    try{
        res.render('index', { 
            msg: "hoge"
        });
    } catch (e) {
        console.log(e);
    }  
});
//
router.get('/about', function(req, res, next) {
  res.render('about', { title: ' '});
});

/******************************** 
* 
*********************************/
router.get('/logout', function(req, res) {
    res.clearCookie('user');
    res.redirect('/');
});

/******************************** 
*  Layout-test
*********************************/
router.get('/test3', function(req, res, next) {
    try{
        var params = { msg: "hoge "}
        res.render('layout_base', { 
            layout_name: 'test1', params: params
        });
    } catch (e) {
        console.log(e);
    }  
});


module.exports = router;
