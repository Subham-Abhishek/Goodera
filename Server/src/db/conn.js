const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Subham:Subham@goodera.3giyy.mongodb.net/goodera").then(() => {
    console.log("MongoDB connection established");
}).catch(() => {
    console.log("Something went wrong");
})