const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String }, // mesmo se for login social, pode deixar vazio
  provedor: { type: String, default: 'local' }, // local, google, facebook, apple
  imagemPerfil: { type: String, default: '' },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String, required: false }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
