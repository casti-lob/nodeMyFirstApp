const express = require("express");
const router = express.Router();
const{check} = require('express-validator')
//Importamos Controller
const {getCats,getCat, addCat, updateCat, deleteCat}= require('../controllers/cat')
//Importamos Middlewares
const {validateFields}= require('../middlewares/validate-fields')


router
.route('/')
.get(getCats)
.post([
  check('name','Name is require').not().isEmpty(),
  validateFields
],addCat)


router
.route("/:id")
.get(getCat)
.patch(updateCat)
.delete(deleteCat)

  
 
  

  
  // Ahora que hemos construido todas estas rutas, ¡exportemos este módulo para usarlo en nuestro app.js!
  module.exports = router;