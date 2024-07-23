const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        nome:{
            type: String,
            required: [true, "Entre com um nome"],
        },

        quantidade:{
            type: Number,
            required: [true, "Entre com uma quantidade"],
            default: 0,
        },

        preco: {
            type: Number,
            required: [true, "Entre com um preço"],
            default: 0,
        },

        imagem: {
            type: String,
            required: [false, "Entre com uma imagem"],
        },
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model("Product", productSchema)

module.exports = Product