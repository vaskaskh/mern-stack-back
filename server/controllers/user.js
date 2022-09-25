import User from "../models/User.js"

export const updateUser = async(req,res)=>{

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body},{
            new: true
        })   
        
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json(error)
    }
    

    
    
}

export const deleteUser = async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json("User deleted successfully")
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getUserById = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        
        res.status(200).json({
            message:"success",
            user
        })
    } catch (error) {
        console.error(error.message)
    }
}

export const getAllUsers = async(req,res)=>{
    try {
        const user = await User.find({});



   
        

        res.status(200).json({
            message:"success",
            user
        })
    } catch (error) {
        console.error(error.message)
    }
}



export const getProfile = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        
        res.status(200).json({
            message:"success",
            user
        })
    } catch (error) {
        console.error(error.message)
    }
}

