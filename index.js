const express = require("express")
const { criarUsr } = require("./repositorys/repository")




const app = express()

app.get('/cadastro', (req, res)=>{

    res.render('cadastro.html')

})
app.post('/cadastro', (req, res)=>{
    const {nome, email} = req.body
    criarUsr(nome, email)


})
app.listen(3000, ()=>{
    console.log('escutando na porta 3000')
})