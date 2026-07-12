const  authService = require('../services/authService');    

exports.register = async (req, res) => {
    try {
        await authService.registerUser(req.body);
        res.json({ message : "Compte créé ✅"});
    }catch(err){
        res.status(500).json({message : err.message});
    }
};

exports.login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const token = await authService.loginUser(email, password);
    }catch(err){
        res.status(500).json({ messsage : err.message });
    }
}