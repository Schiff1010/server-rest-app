const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
router.get('/', postsController.getAll);
router.get('/:_id', postsController.read_data);
router.post('/create', postsController.create_data);
router.put('/:_id', postsController.update_data);
router.delete('/:_id', postsController.delete_data);
module.exports = router;
