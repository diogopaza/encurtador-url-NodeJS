var express = require('express');
const Link = require('../models/link');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Encurtador' });
});

router.post('/new', async (req, res, next) => {
  const url = req.body.url;
  console.log("URL: " + url);
  const code = generateCode();

 const Resultado = await Link.create({
   url,
   code
 }) 
 // res.render('status', resultado.dataValues);
 res.send("gravado com sucesso");
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
