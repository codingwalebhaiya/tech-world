import mongoose, {Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username:{
            type:String,
            required:true,
            unique:true,
            lowercase: true,
            trim:true,
            index:true,
        
    },
    email: {
        type:String,
        required:true,
        unique:true,
        lowercase: true,
        trim:true
    },
    fullName: {
        type:String,
        required:true,
        trim:true,
        index:true
    },
   
    password:{
        type:String,
        required:[true, 'Password is required']
    
    },
    refreshToken:{
        type:String
    },   
     
}, {timestamps:true})

// write the for encrypted password

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10)
    next()
} )

userSchema.methods.isPasswordCorrect = async function(password){
     return await bcrypt.compare(password, this.password)
}

// generateAccessToken add in methods - short lived (i mean generateAccessToken expire in short duration)
userSchema.methods.generateAccessToken = function(){
   return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

// generateRefreshToken add in methods - long lived (i mean generateRefreshToken expire in long duration)
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
 

export  const User = mongoose.model("User", userSchema)