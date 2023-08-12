const mongoose = require("mongoose"); // We import Mongoose to use ObjectId
const ProductModel = require("../models/products.model"); // We import the model created in the .model.js file saved in the models folder
const { ObjectId } = mongoose.Types; // Destructuring assignment to get ObjectId




// We export the controller functions we will be using. Modules are components with one or more functions. These modules are exported to be used on
// some other part of the app (the user routes). This module provides the necessary methods to make API requests. 


module.exports = { 

// Method to get all users
getAllProducts: (req, res) => { // This method consists of a key paired with an arrow function 
    ProductModel.find() // 
    .then((allProducts) => res.status(200).json(allProducts)) // A promise is returned by the previous mongoose method. All users are returned in JSON
    .catch((err) => res.status(500).json({ message: "Something went wrong", error: err })); // if it fails it returns an error
},

// Method to get one user by Id
getOneProductById: (req, res) => { // This method consists of a key paired with an arrow function 
    ProductModel.findById(req.params.id) // This property is an object containing the property id
    .then((oneProduct) => res.status(200).json(oneProduct)) // A promise is returned by the previous mongoose method. The user is returned in JSON
    .catch((err) => res.status(404).json({ message: "Product not found", error: err })); // if it fails it returns an error
},

// Method to create a user 
createNewProduct: (req, res) => { // This method consists of a key paired with an arrow function 
    ProductModel.create(req.body) // The req.body property contains key-value pairs of data submitted in the request body.
    .then((newProduct) => res.status(201).json(newProduct)) // A promise is returned by the previous mongoose method. A newUser is returned in JSON
    .catch((err) => res.status(500).json({ message: "Something went wrong", error: err })); // if it fails it returns an error
},

 // Method to update one User

  updateOneProductById: async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });

    const updateOptions = {
      new: true, // Return the updated document
      runValidators: true, // Enforce validation during update
    };

    try {
      const updatedProduct = await ProductModel.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        updateOptions
      );
      if (updatedProduct) {
        res.status(200).json(updatedProduct);
      } else {
        res.status(404).json({ message: "Product not found" });
      }
    } catch (err) {
      if (err.name === "ValidationError") {
        return res
          .status(400)
          .json({ message: "Validation Errors", errors: err });
      }
      res.status(500).json({ message: "Something went wrong", errors: err });
    }
  },

// Methods to delete data
// Deleting one user
deleteOneProductById: (req, res) => {
    if (!ObjectId.isValid(req.params.id))
      return res
        .status(400)
        .json({ message: "UUID doesn't match the specified format" });

    ProductModel.deleteOne({ _id: req.params.id })
      .then((result) => {
        if (result.deletedCount === 0) {
          res.status(404).json({ message: "Product not found" });
        } else {
          res.status(200).json({ result: result });
        }
      })
      .catch((err) =>
        res.status(500).json({ message: "Something went wrong", error: err })
      );
  },

// Deleting all users
deleteAllProducts: (req, res) => {
    ProductModel.deleteMany() // Mongoose method to delete everything
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json({ message: "Something went wrong", error: err }));
},
};
