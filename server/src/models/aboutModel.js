const mongoose=require("mongoose");

const aboutSchema=new mongoose.Schema(
    {
        header:{type:String, require:true},
        title: { type: String, require: true },
        description: { type: String }
    }
)

const About=mongoose.model('about',aboutSchema);

module.exports=About;