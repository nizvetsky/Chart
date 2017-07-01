var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Graphic View' });
});

router.get('/:time?',
    function (req, res, next) {
            if (req.params.time) {
                if (req.query.d) {
                    var tr = parseInt(req.query.d);
                    var t = '{ "employees" : [';
                    t = t + '{ "x":"' + tr + '" , "y":"' + Math.pow(tr, 2) + '" } ]}';
                    res.json(t);
                }
                if (req.query.g) {
                    var te = parseFloat(req.query.g);
                    var tee = '{ "employees" : [';
                    if (te > 0){
                        tee = tee + '{ "x":"' + te + '" , "y":"' + (1/te).toFixed(3) + '" } ]}';
                        res.json(tee);
                    }
                }
                if (req.query.l) {
                    var tl = parseFloat(req.query.l);
                    var tll = '{ "employees" : [';
                    if (tl > 0){
                        tll = tll + '{ "x":"' + tl + '" , "y":"' + (Math.log(tl)).toFixed(3) + '" } ]}';
                        res.json(tll);
                    }
                }
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
