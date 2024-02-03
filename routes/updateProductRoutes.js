const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))

const updateProductController = require('../controllers/updateProductAndVariant')

router.put('/updateproduct/:productId', updateProductController.updateProductByID)
router.put('/updatevariant/:productId/:productVariantID', updateProductController.updateProductVariantById)

module.exports = router