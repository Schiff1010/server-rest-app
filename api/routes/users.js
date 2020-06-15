const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
router.get('/', userController.getAll);
router.get('/:_id', userController.read_data);
router.post('/create', userController.create_data);
router.put('/:_id', userController.update_data);
router.delete('/:_id', userController.delete_data);
module.exports = router;
