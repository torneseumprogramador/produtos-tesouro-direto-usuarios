const {Router } = require('express')
const router = Router()
const TesouroController = require('../src/controllers/TesouroController');

router.get('/', TesouroController.home);

router.get('/tesouro', TesouroController.index);
router.get('/tesouro/:tesouro_id', TesouroController.getById);
router.post('/tesouro', TesouroController.create);
router.put('/tesouro/:tesouro_id', TesouroController.change);
router.delete('/tesouro/:tesouro_id', TesouroController.delete);

module.exports = router