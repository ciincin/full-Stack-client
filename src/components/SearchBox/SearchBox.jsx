import { useEffect, useState } from "react";
import useFetchRecipes from "../useFetchRecipes/useFetchRecipes";
import "./SearchBox.css";
import RecipesScroll from "../RecipesScroll/RecipesScroll";
function SearchBox() {
  const { recipes, errorRecipes, loadingRecipes } = useFetchRecipes();
  const [recipesByMealType, setRecipesByMealType] = useState({});
  const [filteredRecipes, setFilteredRecipes]=useState([])
  const [activeMealType, setActiveMealType]=useState("")
  const [searchInput, setSearchInput]=useState("")

  useEffect(() => {
    if (recipes.length > 0) {
      const groupedRecipes = {};
      const seenRecipes = new Set();

      recipes.forEach((recipe) => {
        recipe.mealType.forEach((mealType) => {
          const normalizedMealType = mealType === "Snack" ? "Snacks" : mealType;

          if (!seenRecipes.has(recipe.id)) {
            if (!groupedRecipes[normalizedMealType]) {
              groupedRecipes[normalizedMealType] = [];
            }
            groupedRecipes[normalizedMealType].push(recipe);
            seenRecipes.add(recipe.id);
          }
        });
      });
      setRecipesByMealType(groupedRecipes);
      setFilteredRecipes(recipes)
    }
  }, [recipes]);

  function handleBtnClick(mealType){

    if(recipesByMealType[mealType]){
      setFilteredRecipes(recipesByMealType[mealType])
      setActiveMealType(mealType)
    }
  }

  function handleSearchInputChange(event){
    const query= event.target.value.toLowerCase()
    setSearchInput(query)

    const filtered = recipes.filter((recipe)=>(
      recipe.name.toLowerCase().includes(query)
    ))

    setFilteredRecipes(filtered)
  }

  function handleSubmit(event){
    event.preventDefault()
  }

  function handleSeeAllRecipes(){
    setFilteredRecipes(recipes)
    setActiveMealType("")
  }

  return (
    <div className="search-box-wrapper">
      {Object.keys(recipesByMealType).length > 0 ? (
        <div className="btn-wrapper-search">
          <div className="btn-wrapper-meal-type">
            {Object.keys(recipesByMealType).map((mealType, index) => (
              <button onClick={()=>handleBtnClick(mealType)} className={`btn-style ${activeMealType === mealType ? "active" : ""}`} key={index}>
                {mealType}
              </button>
            ))}
          </div>

        </div>
      ) : (
        <p>No meal type found</p>
      )}

      <form className="inline" onSubmit={handleSubmit}>
        <div className="input-icon">
          <i className="bi bi-search"></i>
          <input
            className="input-field"
            type="text"
            placeholder="Search a recipe..."
            value={searchInput}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="see-all-wrapper"><button onClick={handleSeeAllRecipes} className={`btn-all-recipes`}>See all recipes</button></div>
      </form>

      {filteredRecipes.length===0 && !loadingRecipes && !errorRecipes && (
        <p>No recipes found</p>
      )}

      <RecipesScroll 
      filteredRecipes={filteredRecipes}
      loadingRecipes={loadingRecipes}
      errorRecipes={errorRecipes}/>

      {errorRecipes && <p>Error</p>}
      {loadingRecipes && <p>Loading...</p>}
    </div>
  );
}

export default SearchBox;
