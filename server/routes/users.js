const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

router.post('/authenticate', function(req, res, next) {
    userService.authenticate({username: req.body.username, password: req.body.password})
        .then(user => {
            if(user) {
                console.log(`user  ${req.body.username} logged in`);
                res.json(user);
            }else {
                res.status(400).json({message: 'Incorrect username/password'})
            }
        })
        .catch(err => console.log(err))
});

router.post('/register', function(req, res, next) {
    userService.addUser(req.body).then((user) => res.send(user))
});