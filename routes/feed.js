const express = require('express');
const controllers = require('../controllers/feed');

const router = express.Router()

router.get('/posts', controllers.getPosts);
router.post('/post', controllers.postPosts);

module.exports = router;