import axios from "axios";

export default {
  // Gets all posts
  getProducts: function() {
    return axios.get("/api/products");
  },
  createProduct: function(data) {
    return axios.post("/api/products", data)
  },
  deleteProduct: function(id) {
    return axios.delete("/api/products", id);
  },
  updateProduct: function(id, value) {
    return axios.put("/api/products", id, value);
  },
  search: function(term) {
    return axios.get(`/api/products?q=${term}`);
  }
};