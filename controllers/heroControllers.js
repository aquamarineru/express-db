import pool from '../db/sqlConnection.js'
const getAllHeroes = async (req, res) => {
    try{
//store awaiting value                    the first argument is a string '' which is a sql statement
        const {rows} = await pool.query('SELECT * FROM heroes' )
// When asynchrones function is finished return us a value it'll be stored in var allHeroes and we can send in response
        return res.json(rows) // get ONLY content of the rows
    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}

const createHero = async (req, res) => {
    try{
        const {id} = req.params
        const {rows} = await pool.query('SELECT * FROM heroes WHERE id=$1', [id])
        if(!rows.length){
            return res.status(404).json({error: `Hero not found!`})
        }
        return res.json(rows)
    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}

const getSingleHero = async (req, res) => {
    try{

    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}
const updateHero = async (req, res) => {
    try{

    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}
const retireHero = async (req, res) => {
    try{

    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}

export { getAllHeroes, createHero, getSingleHero, updateHero, retireHero }

/*
    ❗️ This is a structure for all controller function sqlDB or mongoDB

    const getAllHeroes = async (req, res) => {
    try{

    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}
*/