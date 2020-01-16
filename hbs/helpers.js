const hbs = require('hbs');

//HELPERS
hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar',(texto)=>{
   
    let palabra = texto.toUpperCase();
    return palabra;
});
