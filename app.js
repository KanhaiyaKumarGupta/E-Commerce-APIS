require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const port = process.env.PORT || 3000




const createProductrouter = require('./routes/createProductRoutes')
const deleteProductrouter = require('./routes/DeleteProductRoutes')
const updateProductrouter = require('./routes/updateProductRoutes')
const readProductrouter = require('./routes/ReadProductRoutes')
const searchProductrouter = require('./routes/searchRoutes')

app.use(createProductrouter)
app.use(deleteProductrouter)
app.use(updateProductrouter)
app.use(readProductrouter)
app.use(searchProductrouter)
require("./databases/databases")
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
