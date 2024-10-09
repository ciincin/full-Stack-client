import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import useFetchUserInfo from "../../components/useFetchUserInfo/useFetchUserInfo";
import "./Profile.css";
import Footer from "../../components/Footer/Footer";
import useFetchRecipes from "../../components/useFetchRecipes/useFetchRecipes";
import { useEffect } from "react";

function Profile() {
  const { userInfo, error, loading } = useFetchUserInfo();
  const { recipes, errorRecipes, loadingRecipes } = useFetchRecipes();

  useEffect(()=>{
    console.log(recipes);
    
  },[recipes])

  if (loading || loadingRecipes) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  if (errorRecipes) {
    return <div>{errorRecipes}</div>;
  }

  if (!userInfo) {
    return <div>No user data found</div>;
  }

  if (!recipes) {
    return <div>No recipe data found</div>;
  }

  return (
    <div className="profile-container">
      <NavbarComponent />
      <div className="profile-wrapper">
        {userInfo && <h2>Welcome back, {userInfo.username}!</h2>}
      </div>
      <div className="recipes">
        {recipes && <div>
          {recipes.map((recipe)=> recipe.name)}</div>}
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
