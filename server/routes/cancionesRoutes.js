let express = require('express');
const router = express.Router();
let cancionController = require('../controller/cancionController')

router.get('/', (req , res) =>{ /*Endpoint es una ruta que se define metodos*/
    res.status(200).send("hello router");
});

router.post('/', cancionController.agregarCancion)
/*router es un conjunto de rutas*/
module.exports = router;