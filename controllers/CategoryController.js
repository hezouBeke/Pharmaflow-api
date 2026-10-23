const CategoryService = require("../services/CategoryService");


exports.create = async (req, res, next) => {
    try {
        const category = await CategoryService.createCategory(req.body);
        res.json({ message: "Catégorie ajoutée avec succès ✅", category });
    
    }catch (err) {
        next(err);
    };
};

exports.get = async (req, res, next) => {
    try {
        const categories = await CategoryService.getAllCategory();
        res.json(categories);
    }catch (err) {
        next(err);
    };

};

exports.getOne = async (req, res, next) => {
    try {
        const category = await CategoryService.getCategoryById(req.params.id);
        res.json(category);
    }catch (err) {
        next(err);
    };
};

exports.update = async (req, res, next) => {
    try {
        const category = await CategoryService.updateCategory(req.params.id, req.body);
        res.json({ message: "Catégorie mise à jour avec succès ✅", category });

    }catch (err) {
        next(err);
    };
};

exports.delete = async (req, res, next) => {
    try {
        const category = await CategoryService.deleteCategory(req.params.id);
        res.json({ message: "Catégorie supprimée avec succès ✅", category });
    }catch (err) {
        next(err);
    };

};