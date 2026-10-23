const Category = require("../models/Category");
const AppError = require("../utils/AppError");

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
    if(!cats) throw new AppError("Catégorie introuvable", 404);
    return cats;
 };


 exports.updateCategory = async (id, updateData) => {
    const cats = await Category.findByIdAndUpdate(id, updateData, { new: true });
    if(!cats) throw new AppError("Catégorie introuvable", 404);
    return cats;
 };

 exports.deleteCategory = async (id) => {
    const cats = await Category.findByIdAndDelete(id);
    if(!cats) throw new AppError("Catégorie introuvable", 404);
    return cats;
 };