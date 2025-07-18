import pic from '../assets/WhatsApp Image 2025-07-06 at 21.34.07_516e9ad5.jpg';
import '../styles/ProfileComponent.css'
function ProfileComponent(){
    return(
        <>
        <div className="profile-image">
            <img src={pic} alt="Menu" />
        </div>

        </>
    );
}
export default ProfileComponent;