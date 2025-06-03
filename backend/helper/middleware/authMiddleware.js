import jsonWebToken from "jsonwebtoken"
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token ; 
  if(!token) return res.status(401).json({message : "Unauthorized.!"});
  try{  
    const decoded = jsonWebToken.verify(token , process.env.JWT_SECRET);
    req.userId = decoded.userId
    console.log(req.userId)
    next() ; 
  }catch(error){
    return res.status(401).json({ message: "Unauthorized.!" });
  }
}

export default authMiddleware