const bcrtypt = require('bcryptjs');

const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.registerUser = async (userData) => {
    const hashePassword = await bcrtypt.hash(userData.password, 10);
    const user = new User({ ...userData, password: hashePassword });
    await user.save();
    return user;
};

exports.loginUser = async (email, password) => {
    const user = await User.findOne({ email });

    if(!user)  throw new Error("Email incorrecte");

    const isMatch = await bcrtypt.compare(password, user.password);
    if(!isMatch) throw new Error("Mot de passe incorrecte");

    const token = jwt.sign({ id: user._id, role: user.role}, process.env.JWT_SECRET, { expiresIn: "1d" });
    return token;
};