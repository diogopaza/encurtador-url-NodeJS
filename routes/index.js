var express = require('express');
const Link = require('../models/link');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Encurtador' });
});

router.post('/new', async (req, res, next) => {
  const url = req.body.url;
  const code = generateCode();

 const resultado = await Link.create({
   url,
   code
 }) 
 res.render('stats', resultado.dataValues);
})
  


function generateCode(){
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for(let i=0;i<5;i++){
    text +=possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

module.exports = router;
