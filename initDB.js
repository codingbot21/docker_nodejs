const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        var uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.43q0b.mongodb.net/${process.env.MONGO_DATABSE}?retryWrites=true&w=majority`
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        }, (err => {
            if (err) {
                console.log("Connection to database failed ")
                console.log(err)
            }
        }))
        console.log("Connection to database success ...")
    } catch (error) {
        console.log("Error")
    }
}
module.exports = connectDb;
