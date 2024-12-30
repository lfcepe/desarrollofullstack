let mongoose = require('mongoose');

let cancionSchema = new mongoose.Schema({
    nombre: {type: String, require:true},
    artista:{type: String, require:true},
    url_video: {type: String, require:true}
})

let Cancion = mongoose.model('Cancion', cancionSchema);

module.exports = Cancion;