import useFetchRecipes from "../../components/useFetchRecipes/useFetchRecipes";
import "./RecipesCard.css"
function RecipesCard() {
    const {recipes, loadingRecipes, errorRecipes} = useFetchRecipes()

  return (
    <div >
        <h1>Recipes</h1>
        <div className="recipes-scroll-wrapper">
            {recipes.map((recipe, index)=>(
                <div key={index} className="recipe-style">
                    <img className="img-recipes" src={recipe.image} alt={recipe.name}/>
                    <h2>{recipe.name}</h2>
                    <p>{recipe.rating}</p>
                </div>
            ))}
        </div>
        {errorRecipes && <p>Error fetching recipes.</p>}
        {loadingRecipes&& <p>Cooking in progress...</p>}
    </div>
  )
}

export default RecipesCard
