const express = require('express');
const hbs = require('hbs');


var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getFullYear',()=>{
  return new Date().getFullYear()
});
app.set('view engine','hbs');
app.get('/',(req,res)=>{
  // res.send("<h1>Hllo express</h1>");
res.render('home.hbs',{
  Heading:"Home",
  Welcome:'We are great to have you'
});
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
  Heading:"About"
  });
})

app.get("/bad",(req,res)=>{
  res.send({
  errormessage:'Something Bad Happened'
});
});

app.listen(3000,()=>{
  console.log("Server is up to Port:3000")
});