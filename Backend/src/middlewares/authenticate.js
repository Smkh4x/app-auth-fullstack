import jwt from "jsonwebtoken"
const authenticate = async (req, res, next) => {
    try {
 const authUser = req.headers.authorization;
        // console.log(authUser)
    if(!authUser) return res.status(400).json({
        message: "berear not found."
    });

    const token = authUser.split(" ")[1];

    // console.log(token)

    const decode = jwt.verify(
        token,
        process.env.JWT_SECRET
    );
    // console.log(decode);    
    req.authUser = decode;

    next();        
    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
        
    }
   
}
export default authenticate