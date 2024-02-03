const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))

const searchController = require('../controllers/searchController')

router.post('/byproductName', searchController.searchProductByName)
router.post('/productDescription', searchController.searchProductByDescription)
router.post('/byvariantname',searchController.searchProductVariantname)


module.exports = router