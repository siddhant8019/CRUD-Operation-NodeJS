const {validationResult, check}= require('express-validator'); 
const express = require('express');
const route = express.Router();
const path = require('path');

const valida = () => {
    check('student_id').notEmpty().isNumeric(),
    check('name').notEmpty(),
    check('email').notEmpty().isEmail()
}

const authent = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    else {
        next();
        res.status(200)
    };
}

module.exports = {valida, authent}