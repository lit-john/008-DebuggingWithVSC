var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    var myTitle = process.env.TITLE;
    console.log(process.env);
    res.render('index', { title: myTitle });
});

module.exports = router;
