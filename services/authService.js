const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const AppError = require("../utils/AppError");


exports.registerUser = async (userData) => {
    const hashePassword = await bcrypt.hash(userData.password, 10);
    const user = new User({ ...userData, password: hashePassword });
    await user.save();
    return user;
};

exports.loginUser = async (email, password) => {
    const user = await User.findOne({ email }); 
    const isMatch = user && await bcrypt.compare(password, user.password);
    if (!isMatch) throw new AppError("Email ou mot de passe incorrect", 401);
    
    const token = jwt.sign({ id: user._id, role: user.role}, process.env.JWT_SECRET, { expiresIn: "1d" });
    return token;
};



