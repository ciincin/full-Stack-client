import useFetchRecipes from "../useFetchRecipes/useFetchRecipes";
import "./RecipesScroll.css";


function RecipesCard() {
  const { recipes, loadingRecipes, errorRecipes } = useFetchRecipes();
  
  return (
    <div className="recipes-scroll-wrapper">
      {recipes && recipes.map((recipe, index) =>
      <div key={index} className="recipe-scroll-card">
        <h3>{recipe.name}</h3>
        <img className="recipe-scroll-card-img" src={recipe.image} alt={recipe.name}/>
        <p>{recipe.rating} ★ ({recipe.reviewCount})</p>
        <p>{recipe.reviewCount}</p>
        <i class="bi bi-zoom-out"></i>
      </div>
)}
      {errorRecipes && <p>Error fetching recipes.</p>}
      {loadingRecipes && <p>Cooking in progress...</p>}
    </div>
  );
}

export default RecipesCard;
