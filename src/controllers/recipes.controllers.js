import Recipe from "../database/models/recipe.js";

export const listRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "Could not find the list of recipes",
    });
  }
};
export const createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(201).json({
      message: "The recipe was created",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: "The recipe could not be uploaded",
    });
  }
};
export const obtainRecipe = async (req, res) => {
  try {
    console.log(req.params.id);
    const searchedRecipe = await Recipe.findById(req.params.id);
    res.status(200).json(searchedRecipe);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      message: "Could not find the recipe",
    });
  }
};
export const editRecipe = async (req, res) => {
  try {
    const searchedRecipe = await Recipe.findById(req.params.id);
    if (!searchedRecipe) {
      return res.status(404).json({
        message: "Could not find the recipe",
      });
    }
    await Recipe.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "The recipe was edited successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error ocurred trying to edit the recipe",
    });
  }
};
export const deleteRecipe = async (req, res) => {
  try {
    const searchedRecipe = await Recipe.findById(req.params.id);
    if (!searchedRecipe) {
      return res.status(404).json({
        message: "Could not find the recipe",
      });
    }
    await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "The recipe was deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error ocurred trying to delete the recipe",
    });
  }
};
