const mongoose = require('../config/database');

const UserTesouroSchema = new mongoose.Schema({
  cod_tesouro: {
    type: String,
    required: true
  },
  cod_user: {
    type: String,
    required: true,
  },
  valor_invest: {
    type: Number,
    required: true,
  },
  data_invest: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const UserTesouro = mongoose.model('UserTesouro', UserTesouroSchema);

UserTesouro.prototype.comprar = function(){
  return `Está comprando o tesouro com o código ${this.cod_tesouro}`
}

UserTesouro.prototype.resgatar = function(){
  return `Está resgatando o tesouro com o código ${this.cod_tesouro}`
}

UserTesouro.prototype.devolucao = function(){
  return `Está recebendo o tesouro com o código ${this.cod_tesouro}`
}

module.exports = UserTesouro;