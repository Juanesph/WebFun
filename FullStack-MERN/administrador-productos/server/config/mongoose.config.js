const mongoose = require("mongoose"); 

// 2) Setting connection to Mongo DB using 'mongoose' instance
mongoose.connect("mongodb://localhost/product-manager-api",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Established a connection to the database"))
  .catch(err => console.log("Something went wrong when connecting to the database: ", err));