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
        // res.status(500).json({ message: err.message });
    };

};

exports.getOne = async (req, res) => {
    try {
        const category = await CategoryService.getCategoryById(req.params.id);
        res.json(category);
    }catch (err) {
        res.status(500).json({ message: err.message });
    };
};

exports.update = async (req, res) => {
    try {
        const category = await CategorySevice.updateCategory(req.params.id, req.body);
        res.json({ message: "Catégorie mise à jour avec succès ✅", category });

    }catch (err) {
        res.status(500).json({ message: err.message });
    };
};

exports.delete = async (req, res) => {
    try {
        const category = await CategoryService.deleteCategory(req.params.id);
        res.json({ message: "Catégorie supprimée avec succès ✅", category });
    }catch (err) {
        res.status(500).json({ message: err.message });
    };

};