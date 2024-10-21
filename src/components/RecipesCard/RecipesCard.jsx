import { useEffect, useState } from "react";
import useFetchRecipes from "../../components/useFetchRecipes/useFetchRecipes";
import "./RecipesCard.css";
import { useRef } from "react";

function RecipesCard() {
  const { recipes, loadingRecipes, errorRecipes } = useFetchRecipes();
  const [recipesByMealType, setRecipesByMealType] = useState({});
  const sliderRefs = useRef({});

  const visibleCardsCount = 8;

  useEffect(() => {
    if (recipes.length > 0) {
      const groupedRecipes = {};
      const seenRecipes = new Set();
      recipes.forEach((recipe) => {
        recipe.mealType.forEach((mealType) => {
          const normalizedMealType =
            mealType === "Snack" || mealType === "Dessert"
              ? "Snacks"
              : mealType;

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
    }
  }, [recipes]);

  function handleScrollLeft(mealType) {
    const slider = sliderRefs.current[mealType];
    if (slider) {
      slider.scrollBy({ left: -215, behavior: "smooth" });
    }
  }

  function handleScrollRight(mealType) {
    const slider = sliderRefs.current[mealType];
    if (slider) {
      slider.scrollBy({ left: 215, behavior: "smooth" });
    }
  }

  return (
    <div className="recipes-wrapper">
      {Object.keys(recipesByMealType).length > 0 ? (
        <div>
          {Object.keys(recipesByMealType).map((mealType, index) => (
            <div key={index} className="meal-type-section">
              <h2 className="meal-type-title-style">{mealType}</h2>
              <div className="slider-wrapper">
                {recipesByMealType[mealType].length > visibleCardsCount && (
                  <button
                    className="scroll-button left"
                    onClick={() => handleScrollLeft(mealType)}
                  >
                    ◀
                  </button>
                )}
                <div
                  className="recipe-slider"
                  ref={(el) => (sliderRefs.current[mealType] = el)}
                >
                  {recipesByMealType[mealType].map((recipe, i) => (
                    <div key={i} className="recipe-card">
                      <h5 className="recipe-name-style">{recipe.name}</h5>
                      <img src={recipe.image} alt={recipe.name} />
                    </div>
                  ))}
                </div>
                {recipesByMealType[mealType].length > visibleCardsCount && (
                  <button
                    className="scroll-button right"
                    onClick={() => handleScrollRight(mealType)}
                  >
                    ▶
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p> No mealType found</p>
      )}

      {errorRecipes && <p>Error fetching recipes.</p>}
      {loadingRecipes && <p>Cooking in progress...</p>}
    </div>
  );
}

export default RecipesCard;
