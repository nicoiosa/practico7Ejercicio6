import { Router } from "express";
import {
  createRecipe,
  deleteRecipe,
  editRecipe,
  listRecipes,
  obtainRecipe,
} from "../controllers/recipes.controllers.js";
import validationsRecipes from "../helpers/validationsRecipes.js";

const router = Router();

router
  .route("/recipes")
  .get(listRecipes)
  .post([validationsRecipes], createRecipe);
router
  .route("/recipes/:id")
  .get(obtainRecipe)
  .put([validationsRecipes], editRecipe)
  .delete(deleteRecipe);

export default router;
