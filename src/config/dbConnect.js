import mongoose from "mongoose";

async function connectNaDatabase(){
   await mongoose.connect("mongodb+srv://admin:admin123@cluster0.ubvq3ul.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
}


export default connectNaDatabase;