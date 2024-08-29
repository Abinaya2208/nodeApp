// routes/sessionRoutes.js

const express = require('express');
const router = express.Router();

// Define routes
router.get('/user', (req,res)=>{
    res.send("god is great")
});

router.post('/user', (req,res)=>{
    res.send("god is great post call")
});

module.exports = router;