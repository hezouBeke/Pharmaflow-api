const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    // console.log(" hearders recus", req.headers);

    const token = req.headers.authorization?.split(" ")[1];

    // console.log("Token:", token);
    
    if(!token)  return res.status(401).json({ message : "Access denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.log("Erreur JWT :", err.message);
        res.status(400).json({ message : "Invalid token" });
    }
};