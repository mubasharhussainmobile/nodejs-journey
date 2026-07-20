// import database pool
const pool = require('../config/db')

// create a new user

const createUser = async (req, res) => {
    try {
        const {name,email} = req.body;
        if(!name, !email){
            return res.status(400).json({error: 'Name and Email are required'});
        }

        const result = await pool.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
            [name, email]
        )

        res.status(201).json(result.rows[0]);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
}

// get all users

const getAllUsers = async (req, res) => {

    try {
        const result = await pool.query(
            'SELECT * FROM users ORDER BY created_at DESC'
        )
        res.json(result.rows)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}

// get one user by id

const getUserById = async (req,res ) => {
    try {
        const {id} = req.params;
        console.log(typeof id,'my id')
        const result = await pool.query(
            'SELECT * FROM users  WHERE id = $1',
            [id]
        )

        if (result.rows.length === 0) {
            return res.status(404).json({error: 'User not found'})
        }

        res.json(result.rows[0])
    }
    catch (err) {
        res.status(500).json({ error: err.message})
    }
}

// delete a user

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await pool.query(
            'DELETE FROM USERS WHERE id = $1 RETURNING *',
            [id]
        )

        if(result.rows.length === 0) {
            return res.status(404).json({ error: 'User not found'})
        }

        res.json({message: 'User Deleted', user: result.rows[0]})
    }
    catch (err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = {createUser, getAllUsers, getUserById, deleteUser}