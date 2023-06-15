const isLogged = ( req ,res , next) =>{
    let isLogged = true
    if(isLogged){
       next()
    }else{
       res.send("No puede acceder debe logearse")
    }
    }
    exports.isLogged = isLogged