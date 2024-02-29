const mongoose = require('mongoose');
const connectDB = async () => {
  
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect("mongodb+srv://ssoumyajit245:uAVB8JZmAkcJzqqt@cluster0.ybowkxi.mongodb.net/BlogApp?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }

}

module.exports = connectDB;
