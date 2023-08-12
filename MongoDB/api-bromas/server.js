const express = require("express"); 

const app = express(); 


app.use(express.json());
app.use(express.urlencoded({extended: true}));


require("./server/config/mongoose.config");


const JokeRoutes = require("./server/routes/joke.route");
JokeRoutes(app); 

app.listen(8000, () => console.log("The server is all fired up on port 8000"));