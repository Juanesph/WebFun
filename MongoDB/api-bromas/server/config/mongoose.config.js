const mongoose = require('mongoose'); 
const db_name = "jokes_db"


mongoose.connect(`mongodb://localhost/${db_name}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database connection established"))
  .catch(err => console.log("There was an error:", err));