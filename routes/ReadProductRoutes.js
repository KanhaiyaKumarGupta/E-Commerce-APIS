const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))

const fetchProductController = require('../controllers/readProductAndVariant')

router.get('/fetchProduct/:productId', fetchProductController.GetProductByID)
router.get('/fetchProductVariant/:productId/:productVariantId', fetchProductController.GetProductVariantById)

module.exports = router