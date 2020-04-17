const Tesouro =  require('../models/Tesouro');
const TOKEN = "123456"

const TesouroController = {
  home: async (req, res, next) => {
        return res.status(200).json({info: "API Tesouro Direto Usuarios - Million - protegido com token"})
  },    
  
  index: async (req, res, next) => {
    if(req.headers.token === TOKEN){
      try{
      const tesouro =  await Tesouro.find({})
      return res.status(200).send(tesouro)
      }
      catch(err){
        return res.status(401).send(err)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },

  getById: async (req, res, next) => {
    if(req.headers.token === TOKEN){
      try {
        const tesouro =  await Tesouro.findById(req.params.user_id)
        return res.status(200).send(tesouro)
      } catch (error) {
        res.status(401).send(err)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },
  
  create: async (req, res, next) => {
    if(req.headers.token === TOKEN){
      const {cod_tesouro, cod_user, valor_invest, data_invest} = req.body
      try {
        const tesouro =  await Tesouro.create({ cod_tesouro, cod_user, valor_invest, data_invest});
        return res.status(201).send(tesouro)
      } catch (error) {
        return res.status(401).send(error)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },

  change: async(req, res, next) => {
    if(req.headers.token === TOKEN){
      try{
        await Tesouro.findOneAndUpdate({_id: req.params.cod_tesouro}, { cod_tesouro: req.body.cod_tesouro, cod_user: req.body.cod_user, valor_invest: req.body.valor_invest, data_invest: req.body.data_invest})
        return res.status(204).send(`Alterado com o id ${req.params.cod_tesouro}`)
      }
      catch(err){
        console.log(err)
        return res.status(401).send(`Erro: ${err}`)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  },

  delete: async(req, res, next) => {
    if(req.headers.token === TOKEN){
      try{
        await Tesouro.findByIdAndDelete(req.params.cod_tesouro)
        return res.status(204).send({});
      }
      catch(err){
       return res.status(401).send(err)
      }
    }
    return res.status(401).json({error: "Acesso não autorizado"})
  }
}

module.exports = TesouroController;