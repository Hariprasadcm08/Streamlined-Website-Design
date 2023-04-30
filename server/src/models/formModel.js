const mongoose=require('mongoose');

const formSchema=new mongoose.Schema(
    {
        firstName:{type:String,require:true},

        lastName:{type:String, require:false},

        email:{type:String, require:true},

        contactNo:{type:Number, require:false},

        description:{type:String,require:true}
    },
    {
        timestamps:{createdAt:"createOn", updatedAt:"modifiedOn"},
        versionKey:false
    }
)

const Form=mongoose.model("form",formSchema);

module.exports=Form;