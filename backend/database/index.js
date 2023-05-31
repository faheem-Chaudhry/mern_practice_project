const  mongoose = require('mongoose')
const {MONGODB_CONNECTION_STRING} = require('../config/index');
// {} ka matlab ha ham ne MONGODB_CONNECTION_STRING ko destructure kiya ha
// isko ham ne as a object export kiya tha is liye {} lgaya sath

const connectionString = "mongodb+srv://fk32550:hno30stno13@cluster0.gsnugbj.mongodb.net/coin-bounce?retryWrites=true&w=majority"

const dbConnect = async ()=>{
    try {
        const conn = await mongoose.connect(MONGODB_CONNECTION_STRING);

        console.log(`database connected to the host ${conn.connection.host}`);
        
    } catch (error) {
        console.log(` Error: ${error}`)
    }
}
module.exports = dbConnect;