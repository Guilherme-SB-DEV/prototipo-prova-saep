const express = require("express")


const app = express()

app.get('/cadastro', (req, res)=>{

    res.render('cadastro.html')

})
