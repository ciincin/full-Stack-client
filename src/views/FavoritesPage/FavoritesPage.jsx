import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import Footer from "../../components/Footer/Footer";
import FavoriteRecipes from "../../components/FavoriteRecipes/FavoriteRecipes";
import useFavorites from "../../components/useFavorites/useFavorites";

function FavoritesPage() {
  const { recipes, isFavorite, toggleFavorite } = useFavorites();

  return (
    <div>
      <NavbarComponent />
      <FavoriteRecipes recipes={recipes} isFavorite={isFavorite} toggleFavorite={toggleFavorite}/>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
