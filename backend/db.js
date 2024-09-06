const mongoose = require('mongoose');


const mongoURI = "mongodb+srv://sumitsawant1029:TCCMSCUe9KBz9dSv@pendowncluster.occow2a.mongodb.net/?retryWrites=true&w=majority&appName=PendownClusterp";

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