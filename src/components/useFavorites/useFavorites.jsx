import { useEffect, useState } from "react";
import useFetchRecipes from "../useFetchRecipes/useFetchRecipes";


function useFavorites() {
  const { recipes } = useFetchRecipes();

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Save favorites in localStorage when change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Add/Remove favorites
  function toggleFavorite(id) {
    setFavorites(
      (prevFavorites) =>
        prevFavorites.includes(id)
          ? prevFavorites.filter((favId) => favId !== id) //Remove
          : [...prevFavorites, id] //Add
    );
  }

  //Check if is a recipe is favorite

  function isFavorite(id) {
    return favorites.includes(id);
  }
  return {recipes, toggleFavorite, isFavorite}
}

export default useFavorites;
