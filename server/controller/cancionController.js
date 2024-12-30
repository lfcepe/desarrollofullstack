let Cancion = require('../models/cancion');

exports.agregarCancion = async (req, res) =>{
    console.log("RESPUESTA RECIBIDA" +req.body);
    const {nombre, artista, url_video} = req.body; /*deconstruccion de un objeto se consigue las propiedades, sale del request.body*/ 
    const cancion = new Cancion({nombre, artista, url_video});
    try{
        await cancion.save();
        console.log("CANCION GUARDADA" +res.body)
        res.status(201).json(cancion);
    }catch(error){
        console.error(error);
        res.status(400).json({message: 'Error al guardar cancion'})
    }
}