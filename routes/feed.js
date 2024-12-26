const express = require('express');
const controllers = require('../controllers/feed');
const {check, body} = require('express-validator');
const router = express.Router()

router.get('/posts', controllers.getPosts);
router.post('/post', [
    body('title')
        .trim()
        .isLength({ min: 5 }),
    body('content')
        .trim()
        .isLength({min: 5})
], controllers.createPost);

module.exports = router;