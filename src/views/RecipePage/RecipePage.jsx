import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import useFetchRecipes from "../../components/useFetchRecipes/useFetchRecipes";

function RecipePage() {
  const { recipes } = useFetchRecipes();
  const [favorites, setFavorites] = useState([]);

  // Load fav from localStorage at startup
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

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

  return (
    <div>
      <NavbarComponent />
      <RecipeInfo
        recipes={recipes}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
      <Footer />
    </div>
  );
}

export default RecipePage;
