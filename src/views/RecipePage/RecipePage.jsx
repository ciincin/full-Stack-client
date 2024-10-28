import Footer from "../../components/Footer/Footer"
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent"
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo"
import useFetchRecipes from "../../components/useFetchRecipes/useFetchRecipes"

function RecipePage() {
   const {recipes}=useFetchRecipes()

  return (
    <div>
    <NavbarComponent/>
    <RecipeInfo recipes={recipes}/>
    <Footer/>
  </div>
  )
}

export default RecipePage
