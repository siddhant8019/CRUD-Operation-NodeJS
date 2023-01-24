const express = require('express');
const {validationResult, check}= require('express-validator'); 
const route = express.Router();
const path = require('path');
const db = require('../12-01-2023/controllers/controller');

route.get('/users', db.getUsers)

route.get('/users/:student_id',
            [check('student_id').notEmpty().isNumeric()],
            (req, res, next) => {
              const errors = validationResult(req);
              if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
              }
              else next();
            },
            db.getUserById
          )

route.post('/users',
            [check('student_id').notEmpty().isNumeric(),
            check('name').notEmpty(),
            check('email').notEmpty().isEmail()],
            (req, res, next)=>{
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                  return res.status(400).json({ errors: errors.array() });
                }
                else next();
            },
            db.createUser
          )

route.put('/users/:id', 
            check('student_id').notEmpty().isNumeric(),
            (req, res, next) => {
              const errors = validationResult(req);
              if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
              }
              else next();
            },
            db.updateUser)

route.delete('/users/:id', 
            [check('student_id').notEmpty().isNumeric()],
            (req, res, next) => {
              const errors = validationResult(req);
              if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
              }
              else next();
            },
            db.deleteUser)

module.exports = route;