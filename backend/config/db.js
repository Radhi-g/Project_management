const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  const conn = await mongoose.connect("mongodb+srv://pu635870:PankajMern--2024@cluster0.1byrt22.mongodb.net/user-task?retryWrites=true&w=majority");

  console.log(
    `MongoDB Connected: ${conn.connection.host}:${conn.connection.port}`.cyan
      .underline.bold
  );
};

module.exports = connectDB;
