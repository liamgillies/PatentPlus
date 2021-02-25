const userSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

module.exports = {
    authenticate,
    addUser
}

// authenticates user
async function authenticate({username, password}) {
    const user = await userSchema.findOne({username: username});
    if(user && bcrypt.compareSync(password, user.hash)) {
        const {hash, ...userWithoutHash} = user.toObject();

        const token = jwt.sign({abc: user._id}, 'secret key no one should know');
        return {
            ...userWithoutHash,
            token
        }
    }
}

// getter for users
async function getById(id) {
    return userSchema.findOne({_id: id});
}

// registers a user
async function addUser(user) {
    if(await userSchema.findOne({username: user.username})) {
        return false
    }

    const newUser = new userSchema(user);

    newUser.hash = bcrypt.hashSync(user.password, 10);

    return newUser.save();
}