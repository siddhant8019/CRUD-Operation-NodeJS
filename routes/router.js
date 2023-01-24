const express = require('express');
const route = express.Router();
const path = require('path');
const db = require("../controllers/controller");

route.get('/users', db.getUsers)
route.get('/users/:student_id', db.getUserById)
route.post('/users', db.createUser)
route.put('/users/:id', db.updateUser)
route.delete('/users/:id', db.deleteUser)

module.exports = route;