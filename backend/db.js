const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://pendown:UF28TSZvCz5eblhP@cluster0.byat3.mongodb.net/";

const connectToMongo = () => {
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected Successfully");
    })
    .catch(error => {
        console.error("Error connecting to MongoDB:", error);
    });
}

module.exports = connectToMongo;