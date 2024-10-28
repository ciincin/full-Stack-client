import { useParams } from "react-router-dom";
import "./RecipeInfo.css";

function RecipeInfo({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id, 10));

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="recipe-page-wrapper">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>Rating: {recipe.rating} ★</p>
      <p>Reviews: {recipe.reviewCount}</p>
      <p>Type of food: {recipe.cuisine}</p>
      <p>Dificulty: {recipe.dificulty}</p>
      <p>Servings: {recipe.servings}</p>
      <p>Calories: {recipe.calories}</p>
      <p>Preparation time: {recipe.prepTimeMinutes} min</p>
      <p>Cooking time: {recipe.cookTimeMinutes} min</p>
      <p>Ingredients:</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Instructions</p>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      {recipe.mealType.map((mealType, index)=>(
        <div key={index}>{mealType}</div>
      ))}
    </div>
  );
}

export default RecipeInfo;
