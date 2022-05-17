const jwt = require('jsonwebtoken')
const Admin = require('../models/admin.model')
exports.isAuthenticatedUser = async(req,res,next) =>{
        const authorization =req.headers.authorization;
        const token = authorization.split(' ')[1];
        if(!token){
            res.json('please login to access this resource')
        }
        const decodeddata = jwt.verify(token,'KEy');
        req.admin = await Admin.findById(decodeddata._id);
        console.log(req.admin);
  next();
}

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.admin.role)) {
        return next(`Role: ${req.admin.role} is not allowed to access this resouce `,403);
      }
  
      next();
    };
  };