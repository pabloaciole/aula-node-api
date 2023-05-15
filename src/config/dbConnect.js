import mongoose from "mongoose"

mongoose.connect("mongodb+srv://aulaalura:alura693414@cluster0.kaprrma.mongodb.net/alura-node");

let db =  mongoose.connection;

export default db;