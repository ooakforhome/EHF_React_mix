import axios from "axios";

export default {
  // Gets all products
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the product with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  addProduct: function(productData) {
    return axios.post("/api/products", productData);
  },
  updateProduct: function(id, productData){
    return axios.put("/api/products/" + id, productData);
  },
  // Gets all Companies
  getCompanies: function() {
    return axios.get("/api/companies");
  },
  // Gets the product with the given id
  getCompany: function(id) {
    return axios.get("/api/companies/" + id);
  },
  // Deletes the product with the given id
  deleteCompany: function(id) {
    return axios.delete("/api/companies/" + id);
  },
  // Saves a product to the database
  saveCompany: function(companiesData) {
    return axios.post("/api/companies", companiesData);
  },
  updateCompany: function(id, companiesData){
    return axios.put("/api/companies/" + id, companiesData);
  },
  // Gets all notes
  getNotes: function() {
    return axios.get("/api/notes");
  },
  // Gets the product with the given id
  getNote: function(id) {
    return axios.get("/api/notes/" + id);
  },
  // Deletes the product with the given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a product to the database
  saveNote: function(noteData) {
    return axios.post("/api/notes", noteData);
  }

};
