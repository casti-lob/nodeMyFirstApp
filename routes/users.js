const express = require("express");
/*
  El enrutador es un objeto en el módulo base de Express.
  Este objeto de enrutador tendrá métodos similares (.get, .post, .patch, .delete) al
  objeto de la aplicación que hemos estado utilizando anteriormente.
*/
const router = express.Router();

const users = []; // idealmente, esto sería una base de datos, pero comenzaremos con algo simple
var id = 1; // esto nos ayudará a identificar usuarios únicos

// en lugar de app.get...
router.get("/", (req, res) => {
  if(users.length<1){
    return res.status(200).json("De momento no hay usuarios");
  }
  return res.status(200).json(users);
});

router.get("/:id", (req, res) => {
    paramsId =req.params.id
   
   
        const user = users.find(val => val.id === Number(paramsId));
        if(!user){
            return res.status(404).json("No existe el user");

        }else{
            return res.status(200).json(user);

        }
    
 
});

// en lugar de app.post...
router.post("/", (req, res) => {
  if(req.body.name==""){
    return res.status(406).json("No se puede crear un usuario sin nombre");
  }
    const newUser= {
        name: req.body.name,
        id: ++id
      }
  users.push(newUser);
  return res.status(201).json(newUser);
});

// en lugar de app.patch...
router.patch("/:id", (req, res) => {
  const paramsId= req.params.id
  
  const user = users.find(val => val.id === Number(paramsId));
  if(!user){
    return res.status(404).json("No existe el user");
  }
  user.name = req.body.name;
  return res.status(200).json(user);
});

// en lugar de app.delete...
router.delete("/:id", (req, res) => {
  const paramsId= req.params.id
  const userIndex = users.findIndex(val => val.id === Number(paramsId));
  if(userIndex==-1){
    return res.status(404).json("No existe el user");
  }
  const user =users.find(val => val.id === Number(paramsId))
  users.splice(userIndex, 1);
  return res.status(200).json({ user });
});

// Ahora que hemos construido todas estas rutas, ¡exportemos este módulo para usarlo en nuestro app.js!
module.exports = router;


