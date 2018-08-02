const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articleController');
const authentication = require('../middlewares/authentication');

router.post('/', authentication.verifyToken, articleController.create);

router.get('/', articleController.readAll);

router.get('/:id', articleController.readById);

router.get('/category/:category', articleController.readByCategory);

router.get('/author/:authorID', articleController.readByAuthor);

router.put('/:id', authentication.verifyToken, articleController.updateById);

router.delete('/:id', authentication.verifyToken, articleController.deleteById);

module.exports = router;
