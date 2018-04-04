const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("express").Router();

//Models
const ProductInfo = require('../models/ProductInfo_model');
const ClientProduct = require('../models/ClientProduct_model');
const Ehf = require('../models/Ehf_model');
const Note = require('../models/Notes');
const Image = require('../models/Image_model')

//router
router.get('/', function(req,res){
  res.send("ehf api/ehfs");
});

router.route("/api/images")
    .get(Image.getImages)
    .post(Image.addImage);

router.route("/api/images/:_id")
    .get(Image.getImagesById)
    .put(Image.updateImage)
    .delete(Image.deleteImage);

router.route("/api/ehfs")
    .get(Ehf.getEhf)
    .post(Ehf.addEhf);

router.route("/api/ehf/:_id")
    .get(Ehf.getEhfById)
    .put(Ehf.updateEhf)
    .delete(Ehf.deleteEhf);

router.route("/api/productinfos")
    .get(ProductInfo.getProductInfo)
    .post(ProductInfo.addProductInfo);

router.route("/api/productinfo/:_id")
    .get(ProductInfo.getProductInfoById)
    .put(ProductInfo.updateProductInfo)
    .delete(ProductInfo.deleteProductInfo);

router.route("/api/clientProducts")
    .get(ClientProduct.getClientProduct)
    .post(ClientProduct.addClientProduct);

router.route("/api/clientProduct/:_id")
    .get(ClientProduct.getClientProductById)
    .put(ClientProduct.updateClientProduct)
    .delete(ClientProduct.deleteClientProduct);

router.route("/api/notes")
    .get(Note.getNotes)
    .post(Note.addNote);

router.route("/api/notes/:_id")
    .get(Note.getNotesById)
    .put(Note.updateNote)
    .delete(Note.deleteNote);

module.exports = router;
