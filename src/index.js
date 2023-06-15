const express = require("express")
const path = require("path")
const app = express()
const connection= require("./connection")
const users = require("./routers/users")
const loggedMiddlewares = require("./middlewares/logged")

app.set("title", "Aplicacion hecha en node")
app.set("port", 3000)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(loggedMiddlewares.isLogged)
app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:false}))
//rutas
app.get('/', (req,res) =>{
   res.render("index")
})
app.use('/users', users)

app.listen(app.get("port"),()=>{console.log(`Mi ${app.get("title")} esta corriendio por el puerto ${app.get("port")}`)})