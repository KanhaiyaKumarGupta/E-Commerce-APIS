const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))

const productController = require('../controllers/createProductAndVariant')

router.post('/createproduct',productController.createProduct)
router.post('/createproductvariant/:productId',productController.createProductVariant)

module.exports = router