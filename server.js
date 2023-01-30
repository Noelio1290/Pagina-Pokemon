const express = require("express")
const app = express();
const port = 8000;

app.listen(port, function(){
    console.log(`Inicializado en el puerto ${port}`);
    console.log(`http://localhost:${port}`);
});