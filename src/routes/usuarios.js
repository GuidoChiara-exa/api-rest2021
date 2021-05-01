const Router = require('express')

const controller = require('../controllers/usuarios')

const router = Router()

router.post('/' , controller.createUsuario);

router.get('/' ,  controller.getUsuario);

router.get('/:id' ,  controller.getUsuario);

router.delete('/:id',  controller.deleteUsuario);

router.put('/:id', controller.modifyUsuario);

module.exports = router;