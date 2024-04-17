const express = require('express');

const app = express()

app.get('/', (req, res)=> {
    return res.send("Hey this is an express server")

})
app.listen(3030, ()=> {console.log("Server is running on port 3030");})