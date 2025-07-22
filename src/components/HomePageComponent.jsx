import ProfileComponent from "./ProfileComponent";
import SearchBar from "./SearchBar";
import NotificationComponent from "./NotificationComponent";    
import LanguageComponent from "./LanguageComponent";
import '../styles/HomePageComponent.css';

function HomePageComponent() {
  return (
     
      <div className="main-content home-page">
       <div className="top-part">
         <div className="profile-component">
        <ProfileComponent/>

         </div>
        <div className="searchBar">
          <SearchBar />
        </div>
        <div className="notification-component">
          <NotificationComponent />
        </div>

        <div className="language-componet">
          <LanguageComponent />
        </div>

       </div>
        <div className="content">
          
        </div>
      </div>
  );
}

export default HomePageComponent;