const Router = require('express')

const controller = require('../controllers/repository')

const router = Router()

router.post('/' , controller.createRep);

router.get('/' ,  controller.getReps);

router.get('/:id' ,  controller.getRep);

router.delete('/:id',  controller.deleteRep);

router.put('/:id', controller.modifyRep);

module.exports = router;
