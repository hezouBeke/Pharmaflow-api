const bcrtypt = require('bcryptjs');

const jwt = require("jsonwebtoken");

const User = require("../models/User");

exports.registerUser = async (userData) => {
    const hashePassword = await bcrtypt.hash(userData.password, 10);
    const user = new User({ ...userData, password: hashePassword });
    await user.save();
    return user;
};