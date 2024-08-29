const express = require('express');
const router = require('./router')
require('dotenv').config();

const app = express()
app.use(express.json());

app.use('/',router)


const PORT =  4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));