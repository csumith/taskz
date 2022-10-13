const mongoose = require('mongoose')
const assert = require('assert')
 

const connectDB = async () => {
    return await mongoose.connect(process.env.MONGO_URL, 
        { useNewURLParser: true }, 
        err => {
        if(err) assert.deepStrictEqual(err, null);
        console.log('mongodb connected successfully');
    })
 }

module.exports = connectDB