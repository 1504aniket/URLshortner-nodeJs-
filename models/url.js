const mongoose=require('mongoose')
const urlschema=new mongoose.Schema({
    shortid:{
        type:String,
        required:true,
        unique:true
    },
    redirecturl:{
        type:String,
        required:true
    }
})
const url=mongoose.model('url',urlschema);
module.exports=url;