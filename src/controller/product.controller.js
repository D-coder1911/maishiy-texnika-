const query = require('../database/pg');

exports.getAllProducts = async function (req, res) {
    
    try {
        const products = await query('SELECT * FROM product', []);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} 

exports.makeNew = async function (req, res) {
    try{
        const { name, price, count } = req.body;

        const product = await query(
        ' INSERT INTO products(name, price, count) VALUES($1, $2, $3) RETURNING *',
            [name, price, count]
        );

        res.status(201).send(product);
    } catch (error) {
        console.log(error.message);
    }
};