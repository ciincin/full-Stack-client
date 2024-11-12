import NavbarComponent from "../../components/NavbarComponent/NavbarComponent"
import Footer from "../../components/Footer/Footer"
import FavoriteRecipes from "../../components/FavoriteRecipes/FavoriteRecipes"

function FavoritesPage() {
  return (
    <div>
        <NavbarComponent/>
        <FavoriteRecipes />
        <Footer/>
    </div>
  )
}

export default FavoritesPage
