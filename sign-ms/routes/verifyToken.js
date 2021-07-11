const jwt = require('jsonwebtoken')

// module.exports  = (req,res,next)=>{
  
//     const token = req.header.authtoken;
//     if(!token){
//         console.log(req.header)
//         return res.status(401).send('access Denied');
//     }
//     try{
//         const verified = jwt.verify(token,process.env.TOKEN_SECRET)
//         req.user = verified;
//         next
//     }catch(err){
//         return res.status(400).send('Invalid Token');
//     }
// }

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
    if (!token) {
        return res.status(401).send('access Denied');
    }
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        console.log("verified", verified)
        req.user = verified;
        next();
    } catch (err) {
        return res.status(400).send('Invalid Token');
    }
}