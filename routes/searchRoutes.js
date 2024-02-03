const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }))

const searchController = require('../controllers/searchController')

router.get('/byproductName', searchController.searchProductByName)
router.get('/productDescription', searchController.searchProductByDescription)
router.get('/byvariantname',searchController.searchProductVariantname)


module.exports = router