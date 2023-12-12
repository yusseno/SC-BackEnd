const express = require('express');
const router = express.Router()
const produkRouter = require('./produk.route')
const produsenRouter = require('./produsen.route')

router.use("/produk",produkRouter)
router.use("/produsen",produsenRouter)


module.exports = router