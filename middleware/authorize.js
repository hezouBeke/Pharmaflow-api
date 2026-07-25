// module.exports = (roles) => (req, res, next) => {
//   if (!roles.includes(req.user.role)) {
//     return res.status(403).json({ message: "Accès interdit" });
//   }
//   next();
// };

 const authorize = (rolesAutorises) =>{
  return (req, res, next ) => {
    const userRoute = req.user?.role;

    if(!rolesAutorises.includes(userRole)){
      return res.status(403).json({ error : `Role '${userRole}' non autorisé` });
    }

    next();
  };
};

module.exports = authorize;

