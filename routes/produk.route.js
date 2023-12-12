const express = require('express');
const router = express.Router()
const {
    produkA,
    produkB,
    produkC,
    produkD,
    produkE
} = require('../controllers/produkController')

router.get("/",produkA)
router.get("/:id",produkB)
router.post('/', produkC)
router.delete('/:id', produkD)
router.patch('/:id', produkE)

module.exports = router