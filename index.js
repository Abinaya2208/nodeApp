const express = require('express');

const app = express()
app.use(express.json());

app.use('/',(req,res)=>{
    res.send("God is Great")
})

const PORT =  4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));