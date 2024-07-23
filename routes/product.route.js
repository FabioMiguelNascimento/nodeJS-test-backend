const express = require("express")
const router = express.Router()
const Product = require("../models/product.model")
const {getProducts, getSingleProduct, postProduct, editProduct, deleteProduct} = require("../controllers/product.controller")


router.get('/', getProducts)

router.get("/:id", getSingleProduct)

router.post("/", postProduct)

router.put("/:id", editProduct)

router.delete("/:id", deleteProduct)