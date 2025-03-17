const { Router } = require("express");
const {
  getAllCategories,
  createCategory,
} = require("../controller/category.controller");

const categoryRouter = Router();

categoryRouter
  .get("/categories", getAllCategories)
  .post("/categories", createCategory);

module.exports = categoryRouter;
