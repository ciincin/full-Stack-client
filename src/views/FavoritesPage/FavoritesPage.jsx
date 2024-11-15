import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import Footer from "../../components/Footer/Footer";
import FavoriteRecipes from "../../components/FavoriteRecipes/FavoriteRecipes";
import useFavorites from "../../components/useFavorites/useFavorites";
import "./FavoritesPage.css"
function FavoritesPage() {
  const { recipes, isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className="favorites-container">
      <NavbarComponent />
      <div className="favorites-content">
        <FavoriteRecipes recipes={recipes} isFavorite={isFavorite} toggleFavorite={toggleFavorite}/>
      </div>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
