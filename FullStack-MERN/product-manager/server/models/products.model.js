const mongoose = require("mongoose"); // Import library to use its methods and custom functionalities to manipulate MongoDB docs

const ProductSchema = new mongoose.Schema( // Creating our schema (blueprint)
{
    title: {
      type: String,
      required: [true, "title"],
      minLength: [3, "First name must at least be 3 characters long"],
    },
    price: {
      type: Number,
      required: [true, "price is required"],
      min: [3, "need to have another price"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minLength: [3, "Last name must at least be 3 characters long"],
    }
},
{ timestamp: true } // This will add to our data 'createdAt' and 'updatedAt' key-value pairs everytime we create/change something 
);

const ProductModel = mongoose.model("Product", ProductSchema); // We define our model as a variable

module.exports = ProductModel; // We export our model