const mongoose = require('mongoose')
let mongoUrl = ""
if (process.env.NODE_ENV==="production") {
    mongoUrl = process.env.DB_URL;
} else {
    mongoUrl = "mongodb://localhost/meal-planner-api"
}

mongoose.connect(mongoUrl)
// mongoose.connect("mongodb://localhost/vinyl-api")

module.exports = mongoose