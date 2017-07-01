var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Table' });
});

router.get('/:time?',
    function (req, res, next) {
            if (req.params.time) {
                var tr = parseInt(req.query.d);
                    var t = '{ "employees" : [';
                    t = t + '{ "x":"' + tr + '" , "y":"' + Math.pow(tr, 2) + '" } ]}';
                    res.json(t);
            }
    });
/*
router.get('/getPoint',
    function (req, res, next) {
        var now = new Date();
        var text = '{ "employees" : [';
        var t = '';
            for (var i = 0; i<=10; i++)
            {
              if (i < 10) {
                  t = '{ "x[' + i + ']":"' + now + '" , "y[' + i + ']":"' + Math.pow(now, 2) + '" },';
                  text.concat(t);
                  t = '';
              } else {
                  t = '{ "x[' + i + ']":"' + now + '" , "y[' + i + ']":"' + Math.pow(now, 2) + '" } ]}';
                  text.concat(t);
                  t = '';
              }
            }
            console.log(text);
            //res.json( x: 5, y: 7);
    });
*/
module.exports = router;
