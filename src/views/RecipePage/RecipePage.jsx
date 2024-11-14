import Footer from "../../components/Footer/Footer";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import useFavorites from "../../components/useFavorites/useFavorites";

function RecipePage() {
  const {recipes, toggleFavorite, isFavorite}= useFavorites()

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
