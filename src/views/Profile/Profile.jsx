import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import useFetchUserInfo from "../../components/useFetchUserInfo/useFetchUserInfo";
import "./Profile.css";
import Footer from "../../components/Footer/Footer";
import RecipesCard from "../../components/RecipesCard/RecipesCard";

function Profile() {
  const { userInfo, error, loading } = useFetchUserInfo();

 

  if (loading ) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  

  if (!userInfo) {
    return <div>No user data found</div>;
  }



  return (
    <div className="profile-container">
      <NavbarComponent />
      <div className="profile-wrapper">
        {userInfo && <h2>Welcome back, {userInfo.username}!</h2>}
      </div>
     <RecipesCard/>
      <Footer />
    </div>
  );
}

export default Profile;