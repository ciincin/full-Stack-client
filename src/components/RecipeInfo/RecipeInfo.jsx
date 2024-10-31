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
      <div className="title-photo-wrapper">
        <div className="title-heart-wrapper">
          <h1 className="title-recipe">{recipe.name}</h1>
          <i class="bi bi-heart"></i>
        </div>
        <img className="photo-recipe" src={recipe.image} alt={recipe.name} />
      </div>
      <div className="info-wrapper">
        <p>
          {recipe.rating} ★ ({recipe.reviewCount})
        </p>
        <p className="recipes-scroll-info-p">
          <i className="bi bi-clock"></i>{" "}
          {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min{" "}
        </p>
        <p>{recipe.cuisine}</p>
        <p>{recipe.difficulty}</p>
        <p>
          {" "}
          <i class="bi bi-people"></i> {recipe.servings}
        </p>
        {recipe.mealType.map((mealType, index) => (
          <p key={index}>{mealType}</p>
        ))}
      </div>

      <div className="ingredients-instructions-wrapper">
        <div className="recipe-ingredients">
          <p className="ingredients">Ingredients:</p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-instructions">
          <h4>How to make {recipe.name}</h4>
          <ol className="ol">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeInfo;
