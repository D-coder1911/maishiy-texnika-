const query = require("../database/pg");

exports.getAllCategories = async function (req, res) {
  try {
    const categories = await query("SELECT * FROM categories;");
    res.send(categories);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
};

exports.createCategory = async function (req, res) {
  try {
    const { name } = req.body;

    const category = await query(
      `INSERT INTO categories (name) VALUES ($1) RETURNING *;`,
      [name]
    );

    res.status(201).send(category);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
};
