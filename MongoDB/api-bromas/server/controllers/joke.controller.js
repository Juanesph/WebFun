const JokeModel = require("../models/joke.model");

module.exports = {

    
    findAllJokes: (req, res) => {
        JokeModel.find() 
            .then((allJokes) => res.json(allJokes)) 
            .catch((err) => res.json({ message: "Something went wrong", error: err })); 
    },
    // Find a joke by Id
    findOneSingleJoke: (req, res) => {
        JokeModel.findOne({ _id: req.params.id }) 
            .then((oneSingleJoke) => res.json(oneSingleJoke)) 
            .catch((err) => res.json({ message: "Something went wrong", error: err })); 
    },
    
    
    createNewJoke: (req, res) => {
        JokeModel.create(req.body) 
            .then((newJoke) => res.json(newJoke)) 
            .catch((err) => res.json({ message: "Something went wrong", error: err })); 
    },

    
    updateExistingJoke: (req, res) => {
        JokeModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) 
            .then((updatedJoke) => res.json(updatedJoke)) 
            .catch((err) => res.json({ message: "Something went wrong", error: err })); 
    },

    
    deleteAnExistingJoke: (req, res) => {
        JokeModel.deleteOne({ _id: req.params.id }) 
            .then((deletedJoke) => res.json(deletedJoke)) 
            .catch((err) => res.json({ message: "Something went wrong", error: err })); 
    }
};