const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))

const deletePrdouctController = require('../controllers/deleteProductAndVariant')

router.delete('/deleteproduct/:productId',deletePrdouctController.deleteProductByID)
router.delete('/deleteproductvariant/:productId/:productVariantId',deletePrdouctController.deleteProductVariantById)

module.exports =  router