import "./RecipesScroll.css";


function RecipesScroll({filteredRecipes, loadingRecipes, errorRecipes}) {
  
  return (
    <div className="recipes-scroll-wrapper">
      {filteredRecipes && filteredRecipes.map((recipe, index) =>
      <div key={index} className="recipe-scroll-card">
        <h3 className="recipe-scroll-title">{recipe.name}</h3>
        <img className="recipe-scroll-card-img" src={recipe.image} alt={recipe.name}/>
        <div className="recipes-scroll-info">
          <p className="recipes-scroll-info-p">{recipe.rating} ★ ({recipe.reviewCount})</p>
          <p className="recipes-scroll-info-p"><i className="bi bi-clock"></i> {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min </p>
          
        </div>
      </div>
)}
      {errorRecipes && <p>Error fetching recipes.</p>}
      {loadingRecipes && <p>Cooking in progress...</p>}
    </div>
  );
}

export default RecipesScroll;
