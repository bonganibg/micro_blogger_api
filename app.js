const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json())

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Nothing"
    })
})

module.exports = app;