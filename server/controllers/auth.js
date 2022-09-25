import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';





export const registerUser = async(req,res)=>{

    const salt = await bcrypt.genSalt(10);

    const hashedPassword =  await bcrypt.hash(req.body.password, salt);

    
    const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        password: hashedPassword,
        isAdmin: req.body.isAdmin
})

    try{

        const savedUser = await newUser.save();

        res.status(201).json({
            message:"User created",
            savedUser
        })

    } catch (error) {
        
        res.status(500).json(error)
    }
    
}
export const loginUser =async(req,res)=>{
    try {


        //checking user with username if it exists
        const user = await User.findOne({email:req.body.email})
        
        if(!user){
            return res.status(404).json({
                message:"User not found"
            })
        }
    
        
        //2=> checking by password 

        //comparing login password to user.password where => user.password is already assigned hashed password ^


        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password) 
        
        if(!isPasswordCorrect){
            res.status(400).json({
                message:"Wrong Password!"
            })
        }


        
        //assign JWT with specifics in this case with id and isAdmin

        const token = jwt.sign({
            id:user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SECRET)

        
        
        const {password, isAdmin, ...otherDetails} = user._doc;

        //send JWT TO COOKIES

        res.cookie("access_token",token,{
            httpOnly: true,
        }).status(200).json({
            ...otherDetails
        })

    } catch (error) {
        res.status(500)
    }
}
