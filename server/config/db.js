const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Add any other options you need
        });
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the process on connection failure
    }
};

module.exports = connectDB;