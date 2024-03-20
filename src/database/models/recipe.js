import mongoose, { Schema } from "mongoose";

const RecipeSchema = new Schema({
  plate: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 40,
    unique: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: function (valor) {
        return /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i.test(
          valor
        );
      },
      message: (props) => `${props.value} is not a valid url image.`,
    },
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 200,
  },
  ingredients: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 500,
  },
  recipe: {
    type: String,
    required: true,
    minLength: 50,
    maxLength: 1000,
  },
});

const Recipe = mongoose.model("recipe", RecipeSchema);

export default Recipe;
