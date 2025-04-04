const mongoose = require('mongoose');


const MONGO_URl = 'mongodb://localhost:27017/url'; 


mongoose.connect(MONGO_URl)
   
.then(() => console.log('Connected to MongoDB ✅'))
.catch(err => console.error('MongoDB Connection Error ❌:', err));

module.exports = mongoose;
