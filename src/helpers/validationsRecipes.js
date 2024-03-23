import { check } from "express-validator";
import resultValidations from "./resultValidations.js";

const validationsRecipes = [
  check("plate")
    .notEmpty()
    .withMessage("The recipe name is obligatory")
    .isLength({ min: 2, max: 40 })
    .withMessage("The recipe name must have between 2 and 40 characters"),
  check("image")
    .notEmpty()
    .withMessage("The image is obligatory")
    .matches(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i)
    .withMessage(
      "The image must have a valid URl and end on png, jpg, jpeg, gif, svg"
    ),
  check("description")
    .notEmpty()
    .withMessage("The description is obligatory")
    .isLength({ min: 10, max: 200 })
    .withMessage("The description must have between 10 and 200 characters"),
  check("ingredients")
    .notEmpty()
    .withMessage("The ingredients are obligatory")
    .isLength({ min: 10, max: 500 })
    .withMessage("The ingredients must have between 10 and 500 characters"),
  check("recipe")
    .notEmpty()
    .withMessage("The recipe is obligatory")
    .isLength({ min: 50, max: 1000 })
    .withMessage("The recipe must have between 50 and 1000 characters"),
  (req, res, next) => resultValidations(req, res, next),
];
export default validationsRecipes;
