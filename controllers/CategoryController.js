const CategoryService = require("../services/CategoryService");


exports.create = async (req, res) => {
    try {
        const category = await CategoryService.createCategory(req.body);
        res.json({ message: "Catégorie ajoutée avec succès ✅", category });
    
    }catch (err) {
        res.status(500).json({ message: err.message });
    };
};

exports.get = async (req, res) => {
    try {
        const categories = await CategoryService.getAllCategory();
        res.json(categories);
    }catch (err) {
        res.status(500).json({ message: err.message });
    };

};