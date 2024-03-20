import { Router } from "express";
import {
  createRecipe,
  deleteRecipe,
  editRecipe,
  listRecipes,
  obtainRecipe,
} from "../controllers/recipes.controllers.js";

const router = Router();

router.route("/recipes").get(listRecipes).post(createRecipe);
router
  .route("/recipes/:id")
  .get(obtainRecipe)
  .put(editRecipe)
  .delete(deleteRecipe);

export default router;
