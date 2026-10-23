const  authService = require('../services/authService');    

exports.register = async (req, res, next) => {
    try {
        await authService.registerUser(req.body);
        res.status(201).json({ message: "Compte créé ✅" });
    }catch(err){
        next(err);
    }
};

exports.login = async (req, res, next) => {
    try{
        const { email, password } = req.body;
        const token = await authService.loginUser(email, password);
        res.json({ token });
    }catch(err){
        next(err);
    }
}