var pool = require('../models/model');
const path = require('path');



const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
           res.status(200).json(results.rows)
       
    })
}

const getUserById = (req, res) => {
    const { student_id } = req.body

    pool.query('SELECT * FROM users WHERE student_id = $1', [student_id], (error, results) => {
        if (error) {
            throw error
        }
        else if(results.rows == 0){
            res.status(404).json("User not found in the database. Enter a valid Student ID")
        }
        else{
            res.status(200).json(results.rows)
        }
    })
}

const createUser = (req, res) => {
    const { student_id, name, email } = req.body
    

    pool.query('INSERT INTO users (student_id, name, email) VALUES ($1, $2, $3)', [student_id, name, email], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).send(`Data: {
            "student_id": ${student_id},
            "name": ${name},
            "email": ${email}
          }
          User Created`)
    })
}

const updateUser = (req, res) => {
    const { student_id, name, email } = req.body

    pool.query('UPDATE users SET name = $1, email = $2, student_id = $3 where student_id = $3', [name, email, student_id], (error, results) => {
            if (error) {
                throw error
            }
            else {
                    res.status(200).send(`Data: {
                    "student_id": ${student_id},
                    "name": ${name},
                    "email": ${email}
                }
                User Updated`)
            }
        }
    )
}

const deleteUser = (req, res) => {
    const { student_id } = req.body

    pool.query('DELETE FROM users WHERE student_id = $1', [student_id], (error, results) => {
        if (error) {
            throw error
        }
        else{
            res.status(200).send(`User deleted`)
        }
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}