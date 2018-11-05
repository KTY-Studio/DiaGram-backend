const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator/check');
const User = require('../models/User.js');
const AccessCode = require('../models/AccessCode.js');

const user = require('../managers/user.js');
const post = require('../managers/post.js');
const session = require('../managers/session.js');

const validator = require('../middlewares/validation.js');
const jwt = require('../middlewares/jwt.js');

/* Users */
router.get('/users', jwt.verifyJWT, user.getUser);

/* Posts */
router.get('/posts', jwt.verifyJWT, post.getPosts);
router.post('/posts', jwt.verifyJWT, post.makePost);

/* Sessions */
router.post('/signup', validator.userSignup, user.signup, session.login);
router.post('/login', validator.userLogin, session.login);

module.exports = router;
