const mongoose = require('../config/database');

const UserTesouroSchema = new mongoose.Schema({
  cod_tesouro: {
    type: String,
    required: true
  },
  cod_user: {
    type: Boolean,
    required: true,
  },
  valor_invest: {
    type: Boolean,
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


module.exports = UserTesouro;