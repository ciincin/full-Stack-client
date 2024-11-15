import { useEffect, useState } from "react";
import "./FavoriteRecipes.css";

function FavoriteRecipes({ recipes, isFavorite, toggleFavorite }) {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const favoritesData = recipes.filter((recipe) =>
      savedFavorites.includes(recipe.id)
    );

    setFavoriteRecipes(favoritesData);
  }, [recipes]);

  return (
    <div className="favorites-wrapper">
      {favoriteRecipes.length > 0 ? (
        favoriteRecipes.map((recipe, index) => (
          <div key={index} className="favorite-container">
            <img
              className="small-photo-recipe"
              src={recipe.image}
              alt={recipe.name}
            />
            <div className="favorite-info-img-photo-wrapper">
              <div className="favorite-title-photo-wrapper">
                <h3>{recipe.name}</h3>
                <i
                  className={`bi ${
                    isFavorite(recipe.id) ? "bi-heart-fill" : "bi-heart"
                  }`}
                  onClick={() => toggleFavorite(recipe.id)}
                ></i>
              </div>
              <div className="favorite-info-wrapper">
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
                  <i className="bi bi-people"></i> {recipe.servings}
                </p>
                {recipe.mealType.map((mealType, index) => (
                  <p key={index}>{mealType}</p>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Add some recipes to your favorite list !</p>
      )}
    </div>
  );
}

export default FavoriteRecipes;
