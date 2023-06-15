const connection= require("../connection")
const users =[
    {id:1, nombre: "aturo", edad: 33},
    {id:2, nombre: "Sebastian", edad: 26},
    {id:3, nombre: "Pili", edad: 36}
]
const getUsers = (req, res)=>{
    const sql = " select * from users"
    connection.query(sql, (err,result) => {
        if(err){
            console.log("ha ocurrido un error")
        }else{
            res.render('users', {users:result})
        }
    })
   
}
const getcreateUsers = (req, res)=>{
    res.render('create-users')
}
const getupdateUsers = (req, res)=>{
    const param =req.params.id
    const sql = "select * from users where ID=?"
    connection.query(sql,param, (err,result)=>{
        if(err){
            console.log("Error al modificar el usuario")
        }else{
            console.log(result)
            res.render('update-users',{users:result})
        }
    })
    
}
const getdeleteUsers = (req, res)=>{
    const param =req.params.id
    const sql = "select * from users where ID=?"
    connection.query(sql,param, (err,result)=>{
        if(err){
            console.log("Error al modificar el usuario")
        }else{
            console.log(result)
            res.render('delete-users',{users:result})
        }
    })
    
}
const createUser = (req,res) =>{
   const sql = "insert into users SET ?" 
   const data = req.body
   connection.query(sql,data, (err,result) =>{
    if(err){
        console.log("Ha ocurrido un error 1")
    }else{
        console.log("usuario registrado")
        res.redirect("users/")
    }

   })

   //res.render('users', {users:users})
}
const updateUser = (req,res) =>{
    const param= req.params.id
    const sql = `update users SET nombre ='${req.body.nombre}', edad =${req.body.edad} where ID = ${param}`
    connection.query(sql, (err,result)=>{
        if(err){
            console.log("no se ha podido actualizar el usuario")
        }else{
            console.log("Usuario actualizado")
            res.redirect("/users/users")
        }
    })
    
}
const deleteUser = (req,res) =>{
    const param= req.params.id
    const sql = `delete from users where ID = ${param}`
    connection.query(sql, (err,result)=>{
        if(err){
            console.log("no se ha podido eliminar el usuario")
        }else{
            console.log("Usuario eliminado")
            res.redirect("/users/users")
        }
    })
    
    
}


module.exports = { getUsers,getcreateUsers,getupdateUsers,getdeleteUsers,createUser,updateUser,deleteUser}