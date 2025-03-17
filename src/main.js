const { config } = require('dotenv');
const express = require('express');
const path = require('path');
const productRouter = require('./route/product.route');

config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("xiew engine", "ejs");
app.set("views", path.join(process.cwd(),"src", "views"));

app.use("/api/v1", productRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
});