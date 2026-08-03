 const Category = require("../models/Category");

 exports.createCategory = async (categoryData) => {
    const category = new Category({ ...categoryData });
    await category.save();
    return category;
 };


 exports.getAllCategory = async () => {
    return await Category.find();

 };

 exports.getCategoryById = async (id) => {
    const cats = await Category.findById(id);
    if(!cats) throw new Error("Catégorie introuvable");
    return cats;

 };