//Importamos el model
const Cat = require("../models/cats")

const getCats = async(req,res)=>{
    try {
        const cats = await Cat.find()
        if(cats.length<1){
           res.status(200).json("De momento no hay gatos");
        }else{
           res.status(200).json(cats);
        }
      } catch (error) {
        res.status(500).json({message:error})
      }
}

const getCat = async(req, res)=>{
    try {
        paramsId =req.params.id
        const cat = await Cat.findById(paramsId)
        if(!cat){
          res.status(404).json("No existe el gato");
        }else{
          return res.status(200).json(cat);
        }
      } catch (error) {
        res.status(500).json({message:error})
      }
}

const addCat = async(req, res)=>{
   
    const cat = req.body
    const newCat = new Cat(cat)
    try {
      await newCat.save()
       res.status(201).json(newCat);
    } catch (error) {
       res.status(500).json({message:error})
    }
}

const updateCat = async(req, res)=>{
   
    const paramsId= req.params.id
    const newCat = req.body
    try {
      const oldCat = await Cat.findById(paramsId);
      if(!oldCat){
        res.status(404).json("No existe el gato");
      }else{
        await oldCat.updateOne(newCat)
        res.status(200).json(await Cat.findById(paramsId))
      }

    } catch (error) {
      res.status(500).json({message:error})
    }

}
const deleteCat = async(req, res)=>{
    const paramsId= req.params.id
    try {
     const cat = Cat.findById(paramsId)
      res.status(200).json( await Cat.deleteOne(cat))
    } catch (error) {
      res.status(500).json({message:error})

    }

}
//Exportamos los metodos del controller
module.exports ={getCats, getCat, addCat, updateCat, deleteCat}