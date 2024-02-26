const express = require('express');
const app = express();
const product = require('./products');
app.get('/', (req, res) => {
    res.json(product);
})


app.listen(5000, () => {
    console.log("server is running on port 5000");
})