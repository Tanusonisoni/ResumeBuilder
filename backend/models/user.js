import { Schema,model } from "mongoose";
const userSchema=new Schema({
    
    name:{
        type:String,
        required:[true,"username is required"],
        trim:true

    },
    email:{
        type:String,
        required:true,
        validator: function (v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v)
            },
            message:props =>{
                 `${props.value} is Not a valid Email`
            },
            required:[true,"invalid email"],
            unique:true

    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
},{timestamps:true})
const userModel=model("user",userSchema)
export default userModel;