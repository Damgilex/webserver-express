const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');//No se crea en una variable para que se ejecute automaticamente

//Variables de entorno heroku
const port = process.env.PORT || 3000;//Localmente no existe la primera opcion, asi que se asignara el puerto 3000

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');//Indicamos donde estan las vistas parciales(las que se heredan)
//Express HBS engine. Para especificar que sera el interprete por defecto
app.set('view engine', 'hbs');


app.get('/',(req, res)=> {

    //Despues de home enviamos un objeto con la asignacion de las variables que utiliza el archivo home.hbs
    res.render('home',{//render se encarga de Detectar el formato y convertirlo a json
        nombre:'fernando',
    });
 });

app.get('/about',(req, res)=> {

    //Despues de home enviamos un objeto con la asignacion de las variables que utiliza el archivo home.hbs
    res.render('about',{
        nombre:'Fernando',
    });//render se encarga de Detectar el formato y convertirlo a json

});
 
app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
