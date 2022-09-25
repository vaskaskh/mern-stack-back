import jwt from 'jsonwebtoken';

export const verifyToken = async(req,res,next)=>{
    const token = req.cookies.access_token;

    //check if token exists
    if(!token){
        return res.status(401).json({
            message:"You are not logged in"
        })
    }
    //if token exists and is correct

    jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
        if(err){
            return res.status(403).json({
                message:"Token is not valid!"
            })
        }

        req.user = user;

        next();
    })
}