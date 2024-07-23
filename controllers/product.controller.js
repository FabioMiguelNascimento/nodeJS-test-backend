const Product = require("../models/product.model");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ Mensagem: error.message });
      }
}

const getSingleProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
      } catch (error) {
        res.status(500).json({ Mensagem: error.message });
      }
}

const editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
    
        if (!product) {
          return res.status(404).json({ Mensagem: "Produto não encontrado" });
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
      } catch (error) {
        res.status(500).json({ Mensagem: error.message });
      }
}

const postProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ product });
      } catch (error) {
        res.status(500).json({ Mensagem: error.message });
      }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
    
        if (!product) {
          return res.status(404).json({ Mensagem: "Produto não encontrado" });
        }
        res.status(200).json({ Mensagem: "Produto deletado com sucesso" });
      } catch (error) {
        res.status(500).json({ Mensagem: error.message });
      }
}

module.exports = {
    getProducts,
    getSingleProduct,
    editProduct,
    postProduct,
    deleteProduct
}